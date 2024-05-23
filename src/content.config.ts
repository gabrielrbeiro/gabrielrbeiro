import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { SUPPORTED_LANGUAGES } from './settings';

export const collections = Object.fromEntries(SUPPORTED_LANGUAGES.map(language => [language, defineCollection({
    loader: glob({ base: `./src/content/blog/${language}`, pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      translations: z.map(z.string(), z.string()).optional()
    })
})]));

