import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['trip', 'calligraphy', 'prepare']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    // 広告（アフィリエイトリンク）を含む記事は true。記事の先頭に「PR」が表示されます。
    pr: z.boolean().default(false),
    // true の間は公開されません（下書き）。
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
