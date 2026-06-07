import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Philosophy', 'Notes', 'Analysis', 'Curation', 'Meta']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),

    // 4層分類（複数選択可）
    layers: z.array(z.enum(['trends', 'discourse', 'implementation', 'impact'])).optional(),

    // 動向の領域（trendsの場合）
    trendDomains: z.array(z.enum(['business', 'academic', 'regulatory', 'social'])).optional(),

    // 3軸での主要な視点
    primaryAxis: z.enum(['product', 'engineering', 'organization']).optional(),
  }),
});

const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['Experience', 'Reflection', 'Behind the Scenes', 'Fiction']),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
  stories: storiesCollection,
};
