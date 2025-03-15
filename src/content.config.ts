import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    locale: z.string(),
    translations: z.array(z.object({
      locale: z.string(),
      location: z.string(),
    }))
  })
});

export const collections = { posts }
