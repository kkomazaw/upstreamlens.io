#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import { GitHubCollector } from './sources/github.js';
import { CNCFBlogCollector } from './sources/cncf-blog.js';
import { SIGWGCollector } from './sources/sig-wg.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load configuration
const config = JSON.parse(
  readFileSync(join(__dirname, 'config.json'), 'utf-8')
);

// Determine if this is a dry run
const isDryRun = process.argv.includes('--dry-run');

class UpstreamCollector {
  constructor(config, isDryRun = false) {
    this.config = config;
    this.isDryRun = isDryRun;
    this.collectors = [];

    // Initialize collectors based on configuration
    if (config.sources.github.enabled) {
      this.collectors.push(new GitHubCollector(config.sources.github));
    }
    if (config.sources.cncfBlog.enabled) {
      this.collectors.push(new CNCFBlogCollector(config.sources.cncfBlog));
    }
    if (config.sources.sigWgMeetingNotes.enabled) {
      this.collectors.push(new SIGWGCollector(config.sources.sigWgMeetingNotes));
    }
  }

  async collect() {
    console.log(`🚀 Starting CNCF Upstream Collection (${this.isDryRun ? 'DRY RUN' : 'LIVE'})`);
    console.log(`📅 Date: ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}\n`);

    const allItems = [];

    for (const collector of this.collectors) {
      try {
        console.log(`\n📡 Collecting from ${collector.name}...`);
        const items = await collector.collect();
        console.log(`✅ Collected ${items.length} items from ${collector.name}`);
        allItems.push(...items);
      } catch (error) {
        console.error(`❌ Error collecting from ${collector.name}:`, error.message);
      }
    }

    // Filter and process items
    const filteredItems = this.filterItems(allItems);
    console.log(`\n📊 Total items after filtering: ${filteredItems.length}`);

    // Generate markdown posts
    const posts = this.generatePosts(filteredItems);

    if (!this.isDryRun) {
      // Save posts to content directory
      this.savePosts(posts);
      console.log(`\n✨ Successfully saved ${posts.length} posts`);
    } else {
      console.log(`\n🔍 DRY RUN: Would have saved ${posts.length} posts`);
      posts.slice(0, 2).forEach(post => {
        console.log(`\n--- Preview: ${post.filename} ---`);
        console.log(post.content.substring(0, 500) + '...\n');
      });
    }

    return posts;
  }

  filterItems(items) {
    const { filters } = this.config;

    return items.filter(item => {
      // Filter by importance
      if (item.stars && item.stars < filters.minStars) {
        return false;
      }

      // Filter by labels
      if (item.labels && item.labels.some(label =>
        filters.excludeLabels.includes(label.toLowerCase())
      )) {
        return false;
      }

      // Prioritize items with important keywords
      const hasImportantKeyword = filters.importantKeywords.some(keyword =>
        (item.title + ' ' + item.description).toLowerCase().includes(keyword.toLowerCase())
      );

      item.priority = hasImportantKeyword ? 'high' : 'normal';

      return true;
    });
  }

  generatePosts(items) {
    const posts = [];
    const today = format(new Date(), 'yyyy-MM-dd');
    const year = format(new Date(), 'yyyy');

    // Group items by source/category
    const grouped = this.groupItems(items);

    for (const [groupKey, groupItems] of Object.entries(grouped)) {
      const post = this.createPost(groupKey, groupItems, today, year);
      posts.push(post);
    }

    return posts;
  }

  groupItems(items) {
    const groups = {};

    items.forEach(item => {
      const key = item.source || 'general';
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
    });

    return groups;
  }

  createPost(source, items, date, year) {
    const filename = `${date}-upstream-${source}.md`;

    // Generate frontmatter
    const frontmatter = {
      title: `Upstream ${this.capitalizeFirst(source)} - ${date}`,
      description: `CNCF upstream activity from ${source}`,
      pubDate: new Date().toISOString().split('T')[0],
      category: this.config.output.category,
      tags: this.generateTags(items),
      draft: false
    };

    // Generate content
    let content = '---\n';
    content += Object.entries(frontmatter)
      .map(([key, value]) => {
        if (key === 'tags') {
          return `${key}: [${value.map(t => `"${t}"`).join(', ')}]`;
        } else if (key === 'pubDate' || key === 'draft') {
          return `${key}: ${value}`;
        }
        return `${key}: "${value}"`;
      })
      .join('\n');
    content += '\n---\n\n';

    content += `## Overview\n\n`;
    content += `This is an automated collection of upstream activity from ${source}.\n\n`;

    // High priority items first
    const highPriority = items.filter(i => i.priority === 'high');
    const normalPriority = items.filter(i => i.priority !== 'high');

    if (highPriority.length > 0) {
      content += `## 🔥 High Priority Updates\n\n`;
      highPriority.forEach(item => {
        content += this.formatItem(item);
      });
    }

    if (normalPriority.length > 0) {
      content += `## Updates\n\n`;
      normalPriority.forEach(item => {
        content += this.formatItem(item);
      });
    }

    content += `\n---\n\n`;
    content += `*This content was automatically collected on ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}*\n`;

    return {
      filename,
      path: join(year, filename),
      content
    };
  }

  formatItem(item) {
    let formatted = `### ${item.title}\n\n`;

    if (item.description) {
      formatted += `${item.description}\n\n`;
    }

    if (item.url) {
      formatted += `🔗 [Link](${item.url})\n\n`;
    }

    if (item.metadata) {
      formatted += `**Metadata:**\n`;
      Object.entries(item.metadata).forEach(([key, value]) => {
        formatted += `- ${key}: ${value}\n`;
      });
      formatted += '\n';
    }

    return formatted;
  }

  generateTags(items) {
    const tags = new Set(['upstream', 'CNCF']);

    items.forEach(item => {
      if (item.tags) {
        item.tags.forEach(tag => tags.add(tag));
      }
      if (item.project) {
        tags.add(item.project);
      }
    });

    return Array.from(tags);
  }

  savePosts(posts) {
    const baseDir = join(__dirname, this.config.output.directory);

    posts.forEach(post => {
      const fullPath = join(baseDir, post.path);
      const dir = dirname(fullPath);

      // Ensure directory exists
      mkdirSync(dir, { recursive: true });

      // Write file
      writeFileSync(fullPath, post.content, 'utf-8');
      console.log(`  ✓ Saved: ${post.path}`);
    });
  }

  capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Main execution
async function main() {
  const collector = new UpstreamCollector(config, isDryRun);

  try {
    await collector.collect();
    console.log('\n✅ Collection complete!\n');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Collection failed:', error);
    process.exit(1);
  }
}

main();
