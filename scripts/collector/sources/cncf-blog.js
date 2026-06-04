import Parser from 'rss-parser';
import { subDays, parseISO, isAfter } from 'date-fns';

export class CNCFBlogCollector {
  constructor(config) {
    this.config = config;
    this.name = 'CNCF Blog';
    this.parser = new Parser();
  }

  async collect() {
    const items = [];
    const since = subDays(new Date(), this.config.lookbackDays);

    try {
      console.log(`  • Fetching CNCF blog RSS feed...`);

      // Use RSS feed instead of web scraping
      const feed = await this.parser.parseURL('https://www.cncf.io/feed/');

      for (const entry of feed.items) {
        try {
          // Parse publication date (use isoDate for proper parsing)
          const pubDate = entry.isoDate ? new Date(entry.isoDate) : null;

          // Filter by date if available
          if (!pubDate || isAfter(pubDate, since)) {
            // Extract description (remove HTML tags for cleaner text)
            const description = this.stripHtml(entry.contentSnippet || entry.content || '');

            items.push({
              source: 'cncf-blog',
              type: 'blog-post',
              title: `CNCF Blog: ${entry.title}`,
              description: this.truncate(description, 400),
              url: entry.link,
              tags: ['CNCF', 'blog', ...this.extractTags(entry.title, description), ...this.extractCategories(entry)],
              metadata: {
                Published: pubDate ? pubDate.toISOString().split('T')[0] : 'Recent',
                Source: 'CNCF Official Blog',
                Author: entry.creator || 'CNCF'
              },
              stars: 1000, // High priority for official CNCF content
              priority: this.determinePriority(entry.title, description)
            });
          }
        } catch (error) {
          // Skip this entry if parsing fails
          console.error(`  ✗ Error parsing entry: ${error.message}`);
        }
      }

      console.log(`  ✓ Found ${items.length} recent blog posts`);
    } catch (error) {
      console.error(`  ✗ Error fetching CNCF blog:`, error.message);
    }

    return items;
  }

  extractCategories(entry) {
    const categories = [];

    // RSS entries often have categories
    if (entry.categories && Array.isArray(entry.categories)) {
      categories.push(...entry.categories.map(c => c.toLowerCase()));
    }

    return categories;
  }

  determinePriority(title, description) {
    const text = (title + ' ' + description).toLowerCase();

    const highPriorityKeywords = [
      'graduation',
      'incubation',
      'security',
      'breaking',
      'kubecon',
      'announcement',
      'release'
    ];

    return highPriorityKeywords.some(keyword => text.includes(keyword)) ? 'high' : 'normal';
  }

  extractTags(title, description) {
    const tags = [];
    const text = (title + ' ' + description).toLowerCase();

    // Common CNCF project keywords
    const projects = [
      'kubernetes', 'prometheus', 'envoy', 'containerd', 'fluentd',
      'jaeger', 'vitess', 'tikv', 'etcd', 'coredns', 'rook', 'harbor',
      'helm', 'argo', 'linkerd', 'istio', 'cilium', 'falco', 'flux',
      'backstage', 'crossplane', 'dapr', 'knative', 'kyverno'
    ];

    projects.forEach(project => {
      if (text.includes(project)) {
        tags.push(project);
      }
    });

    // Important keywords
    const keywords = [
      'graduation', 'incubation', 'sandbox', 'security', 'release',
      'kubecon', 'cloudnativecon', 'survey', 'announcement', 'webinar'
    ];

    keywords.forEach(keyword => {
      if (text.includes(keyword)) {
        tags.push(keyword);
      }
    });

    return tags;
  }

  stripHtml(html) {
    if (!html) return '';
    // Basic HTML tag removal
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  }

  truncate(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
