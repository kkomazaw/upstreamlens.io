import { Octokit } from '@octokit/rest';
import { subDays, parseISO, isAfter } from 'date-fns';

export class GitHubCollector {
  constructor(config) {
    this.config = config;
    this.name = 'GitHub';

    // Initialize Octokit (GitHub API client)
    const auth = process.env.GITHUB_TOKEN;
    if (!auth) {
      console.warn('⚠️  GITHUB_TOKEN not set. API rate limits will be restricted.');
    }

    this.octokit = new Octokit({ auth });
  }

  async collect() {
    const items = [];
    const since = subDays(new Date(), this.config.lookbackDays);

    for (const org of this.config.organizations) {
      try {
        console.log(`  • Scanning organization: ${org}`);

        // Get repositories
        const repos = await this.getOrgRepositories(org);

        for (const repo of repos) {
          // Skip low-activity repos
          if (repo.stargazers_count < 100) continue;

          // Collect releases
          if (this.config.eventTypes.includes('release')) {
            const releases = await this.getRecentReleases(org, repo.name, since);
            items.push(...releases);
          }

          // Collect important issues
          if (this.config.eventTypes.includes('issue')) {
            const issues = await this.getImportantIssues(org, repo.name, since);
            items.push(...issues);
          }

          // Collect important PRs
          if (this.config.eventTypes.includes('pull_request')) {
            const prs = await this.getImportantPRs(org, repo.name, since);
            items.push(...prs);
          }
        }
      } catch (error) {
        console.error(`  ✗ Error scanning ${org}:`, error.message);
      }
    }

    return items;
  }

  async getOrgRepositories(org) {
    try {
      const { data } = await this.octokit.repos.listForOrg({
        org,
        type: 'public',
        sort: 'updated',
        per_page: 30
      });

      return data;
    } catch (error) {
      console.error(`Error fetching repos for ${org}:`, error.message);
      return [];
    }
  }

  async getRecentReleases(owner, repo, since) {
    const items = [];

    try {
      const { data } = await this.octokit.repos.listReleases({
        owner,
        repo,
        per_page: 10
      });

      for (const release of data) {
        const publishedAt = parseISO(release.published_at);
        if (isAfter(publishedAt, since) && !release.draft) {
          items.push({
            source: 'github',
            type: 'release',
            title: `${owner}/${repo}: ${release.name || release.tag_name}`,
            description: this.truncate(release.body, 500),
            url: release.html_url,
            project: repo,
            tags: [owner, 'release'],
            metadata: {
              Version: release.tag_name,
              Published: release.published_at.split('T')[0],
              Prerelease: release.prerelease ? 'Yes' : 'No'
            },
            stars: 0 // Will be set from repo data
          });
        }
      }
    } catch (error) {
      // Silently skip repos without releases
      if (error.status !== 404) {
        console.error(`Error fetching releases for ${owner}/${repo}:`, error.message);
      }
    }

    return items;
  }

  async getImportantIssues(owner, repo, since) {
    const items = [];

    try {
      const { data } = await this.octokit.issues.listForRepo({
        owner,
        repo,
        state: 'open',
        sort: 'created',
        direction: 'desc',
        per_page: 20
      });

      for (const issue of data) {
        // Skip pull requests (they come through the issues API too)
        if (issue.pull_request) continue;

        const createdAt = parseISO(issue.created_at);
        if (isAfter(createdAt, since)) {
          // Only include issues with significant engagement or important labels
          const isImportant = this.isImportantIssue(issue);

          if (isImportant) {
            items.push({
              source: 'github',
              type: 'issue',
              title: `${owner}/${repo}#${issue.number}: ${issue.title}`,
              description: this.truncate(issue.body, 300),
              url: issue.html_url,
              project: repo,
              tags: [owner, 'issue', ...this.extractLabels(issue.labels)],
              labels: this.extractLabels(issue.labels),
              metadata: {
                Created: issue.created_at.split('T')[0],
                Comments: issue.comments,
                State: issue.state
              },
              stars: 0
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching issues for ${owner}/${repo}:`, error.message);
    }

    return items;
  }

  async getImportantPRs(owner, repo, since) {
    const items = [];

    try {
      const { data } = await this.octokit.pulls.list({
        owner,
        repo,
        state: 'open',
        sort: 'created',
        direction: 'desc',
        per_page: 20
      });

      for (const pr of data) {
        const createdAt = parseISO(pr.created_at);
        if (isAfter(createdAt, since)) {
          // Only include PRs with significant engagement or important labels
          const isImportant = this.isImportantPR(pr);

          if (isImportant) {
            items.push({
              source: 'github',
              type: 'pull_request',
              title: `${owner}/${repo}#${pr.number}: ${pr.title}`,
              description: this.truncate(pr.body, 300),
              url: pr.html_url,
              project: repo,
              tags: [owner, 'pr', ...this.extractLabels(pr.labels)],
              labels: this.extractLabels(pr.labels),
              metadata: {
                Created: pr.created_at.split('T')[0],
                Comments: pr.comments,
                State: pr.state,
                Draft: pr.draft ? 'Yes' : 'No'
              },
              stars: 0
            });
          }
        }
      }
    } catch (error) {
      console.error(`Error fetching PRs for ${owner}/${repo}:`, error.message);
    }

    return items;
  }

  isImportantIssue(issue) {
    const importantLabels = [
      'kind/feature',
      'kind/bug',
      'priority/critical',
      'priority/important',
      'needs-triage',
      'breaking-change',
      'security'
    ];

    const hasImportantLabel = issue.labels.some(label =>
      importantLabels.some(important =>
        label.name.toLowerCase().includes(important.toLowerCase())
      )
    );

    const hasHighEngagement = issue.comments > 10;

    return hasImportantLabel || hasHighEngagement;
  }

  isImportantPR(pr) {
    const importantLabels = [
      'kind/feature',
      'breaking-change',
      'release-note',
      'priority/critical',
      'priority/important',
      'lgtm',
      'approved'
    ];

    const hasImportantLabel = pr.labels.some(label =>
      importantLabels.some(important =>
        label.name.toLowerCase().includes(important.toLowerCase())
      )
    );

    const hasHighEngagement = pr.comments > 5;

    return hasImportantLabel || hasHighEngagement;
  }

  extractLabels(labels) {
    return labels.map(label => label.name);
  }

  truncate(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
