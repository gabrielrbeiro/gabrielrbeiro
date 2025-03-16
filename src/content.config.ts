import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { parse as parseYaml } from 'yaml';

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
    thumbnail: z.string(),
    locale: z.string(),
    featured: z.boolean(),
    translations: z.array(z.object({
      locale: z.string(),
      location: z.string(),
    }))
  })
});

export const categories = defineCollection({
  loader: file("./src/content/categories.yaml", { parser: (content) => parseYaml(content) }),
  schema: z.object({
    id: z.string(),
    translations: z.array(z.object({
      locale: z.string(),
      text: z.string(),
      slug: z.string(),
    }))
  })
});


export const collections = { posts, categories }
