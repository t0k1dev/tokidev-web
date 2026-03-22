import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    lang: z.enum(['en', 'es']),
    draft: z.boolean().optional().default(false),
    image: z.string().optional(),
    canonicalUrl: z.string().optional(),
  }),
});

export const collections = { blog };
