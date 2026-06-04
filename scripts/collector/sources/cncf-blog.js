import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import { subDays, parseISO, isAfter } from 'date-fns';

export class CNCFBlogCollector {
  constructor(config) {
    this.config = config;
    this.name = 'CNCF Blog';
  }

  async collect() {
    const items = [];
    const since = subDays(new Date(), this.config.lookbackDays);

    try {
      console.log(`  • Fetching CNCF blog posts...`);

      // Fetch the blog page
      const response = await fetch(this.config.url);
      const html = await response.text();

      // Parse HTML
      const $ = cheerio.load(html);

      // Find blog post entries
      const posts = this.extractPosts($, since);
      items.push(...posts);

      console.log(`  ✓ Found ${posts.length} recent blog posts`);
    } catch (error) {
      console.error(`  ✗ Error fetching CNCF blog:`, error.message);
    }

    return items;
  }

  extractPosts($, since) {
    const posts = [];

    // CNCF blog structure (adjust selectors as needed)
    // This is a generic implementation that may need adjustment
    $('article, .post, .blog-post').each((i, elem) => {
      try {
        const $elem = $(elem);

        // Extract title
        const titleElem = $elem.find('h2, h3, .entry-title, .post-title').first();
        const title = titleElem.text().trim();

        // Extract link
        const linkElem = titleElem.find('a').first();
        const url = linkElem.attr('href') || $elem.find('a').first().attr('href');

        // Extract date
        const dateElem = $elem.find('time, .date, .post-date').first();
        let dateStr = dateElem.attr('datetime') || dateElem.text().trim();

        // Extract excerpt/description
        const descElem = $elem.find('.excerpt, .entry-summary, p').first();
        const description = descElem.text().trim();

        if (title && url) {
          // Try to parse date
          let publishDate = null;
          try {
            publishDate = dateStr ? parseISO(dateStr.split('T')[0]) : null;
          } catch (e) {
            // If date parsing fails, include the post anyway
          }

          // Filter by date if available
          if (!publishDate || isAfter(publishDate, since)) {
            posts.push({
              source: 'cncf-blog',
              type: 'blog-post',
              title: `CNCF Blog: ${title}`,
              description: this.truncate(description, 400),
              url: url.startsWith('http') ? url : `https://www.cncf.io${url}`,
              tags: ['CNCF', 'blog', ...this.extractTags(title, description)],
              metadata: {
                Published: dateStr || 'Recent',
                Source: 'CNCF Official Blog'
              },
              stars: 1000 // High priority for official CNCF content
            });
          }
        }
      } catch (error) {
        // Skip this post if parsing fails
      }
    });

    return posts;
  }

  extractTags(title, description) {
    const tags = [];
    const text = (title + ' ' + description).toLowerCase();

    // Common CNCF project keywords
    const projects = [
      'kubernetes', 'prometheus', 'envoy', 'containerd', 'fluentd',
      'jaeger', 'vitess', 'tikv', 'etcd', 'coredns', 'rook', 'harbor',
      'helm', 'argo', 'linkerd', 'istio', 'cilium', 'falco'
    ];

    projects.forEach(project => {
      if (text.includes(project)) {
        tags.push(project);
      }
    });

    // Important keywords
    const keywords = [
      'graduation', 'incubation', 'sandbox', 'security', 'release',
      'kubecon', 'cloudnativecon', 'survey', 'announcement'
    ];

    keywords.forEach(keyword => {
      if (text.includes(keyword)) {
        tags.push(keyword);
      }
    });

    return tags;
  }

  truncate(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
}
