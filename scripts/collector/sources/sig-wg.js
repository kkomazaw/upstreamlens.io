import { Octokit } from '@octokit/rest';
import { subDays, parseISO, isAfter } from 'date-fns';

export class SIGWGCollector {
  constructor(config) {
    this.config = config;
    this.name = 'SIG/WG Meeting Notes';

    const auth = process.env.GITHUB_TOKEN;
    this.octokit = new Octokit({ auth });
  }

  async collect() {
    const items = [];
    const since = subDays(new Date(), this.config.lookbackDays);

    for (const repoPath of this.config.repositories) {
      const [owner, repo] = repoPath.split('/');

      try {
        console.log(`  • Scanning ${repoPath} for meeting notes and proposals...`);

        // Collect recent commits to meeting notes directories
        const meetingNotes = await this.getMeetingNotes(owner, repo, since);
        items.push(...meetingNotes);

        // Collect KEPs/proposals
        const proposals = await this.getProposals(owner, repo, since);
        items.push(...proposals);

      } catch (error) {
        console.error(`  ✗ Error scanning ${repoPath}:`, error.message);
      }
    }

    return items;
  }

  async getMeetingNotes(owner, repo, since) {
    const items = [];

    try {
      // Search for recent commits to meeting notes
      const { data } = await this.octokit.repos.listCommits({
        owner,
        repo,
        since: since.toISOString(),
        per_page: 50
      });

      for (const commit of data) {
        const message = commit.commit.message;
        const commitDate = parseISO(commit.commit.author.date);

        // Look for commits that update meeting notes
        if (this.isMeetingNoteCommit(message, commit.files || [])) {
          // Get the commit details to see which files were changed
          const { data: commitData } = await this.octokit.repos.getCommit({
            owner,
            repo,
            ref: commit.sha
          });

          const meetingFiles = (commitData.files || []).filter(file =>
            this.isMeetingNoteFile(file.filename)
          );

          if (meetingFiles.length > 0) {
            items.push({
              source: 'sig-wg',
              type: 'meeting-notes',
              title: `Meeting Notes Update: ${this.extractSIGName(meetingFiles[0].filename)}`,
              description: this.truncate(message, 300),
              url: commit.html_url,
              tags: ['SIG', 'meeting-notes', this.extractSIGName(meetingFiles[0].filename)],
              metadata: {
                Date: commitDate.toISOString().split('T')[0],
                Repository: `${owner}/${repo}`,
                'Files Updated': meetingFiles.length
              },
              stars: 500 // Medium-high priority
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching meeting notes for ${owner}/${repo}:`, error.message);
    }

    return items;
  }

  async getProposals(owner, repo, since) {
    const items = [];

    // Only check kubernetes/enhancements for KEPs
    if (repo !== 'enhancements') {
      return items;
    }

    try {
      // Search for recently updated KEPs
      const { data } = await this.octokit.repos.listCommits({
        owner,
        repo,
        since: since.toISOString(),
        path: 'keps',
        per_page: 30
      });

      for (const commit of data) {
        const { data: commitData } = await this.octokit.repos.getCommit({
          owner,
          repo,
          ref: commit.sha
        });

        const kepFiles = (commitData.files || []).filter(file =>
          this.isKEPFile(file.filename)
        );

        if (kepFiles.length > 0) {
          const kepFile = kepFiles[0];
          const kepNumber = this.extractKEPNumber(kepFile.filename);

          items.push({
            source: 'sig-wg',
            type: 'proposal',
            title: `KEP ${kepNumber}: ${this.truncate(commit.commit.message, 100)}`,
            description: `Kubernetes Enhancement Proposal update`,
            url: `https://github.com/${owner}/${repo}/blob/master/${kepFile.filename}`,
            tags: ['KEP', 'proposal', 'kubernetes'],
            metadata: {
              'KEP Number': kepNumber,
              Updated: commit.commit.author.date.split('T')[0],
              Status: this.extractKEPStatus(kepFile.filename)
            },
            stars: 1000 // High priority for KEPs
          });
        }
      }
    } catch (error) {
      console.error(`Error fetching proposals for ${owner}/${repo}:`, error.message);
    }

    return items;
  }

  isMeetingNoteCommit(message, files = []) {
    const keywords = ['meeting', 'notes', 'minutes', 'sig', 'wg'];
    const msgLower = message.toLowerCase();

    return keywords.some(keyword => msgLower.includes(keyword));
  }

  isMeetingNoteFile(filename) {
    const patterns = [
      /meeting.*notes?/i,
      /minutes/i,
      /sig.*\d{4}/i,
      /wg.*\d{4}/i,
      /community.*meetings?/i
    ];

    return patterns.some(pattern => pattern.test(filename));
  }

  isKEPFile(filename) {
    return filename.includes('keps/') && filename.endsWith('.md');
  }

  extractSIGName(filename) {
    const match = filename.match(/sig-([a-z-]+)/i);
    if (match) {
      return `sig-${match[1]}`;
    }

    const wgMatch = filename.match(/wg-([a-z-]+)/i);
    if (wgMatch) {
      return `wg-${wgMatch[1]}`;
    }

    return 'community';
  }

  extractKEPNumber(filename) {
    const match = filename.match(/keps\/([0-9-]+)/);
    return match ? match[1] : 'unknown';
  }

  extractKEPStatus(filename) {
    if (filename.includes('provisional')) return 'Provisional';
    if (filename.includes('implementable')) return 'Implementable';
    if (filename.includes('implemented')) return 'Implemented';
    return 'Unknown';
  }

  truncate(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
