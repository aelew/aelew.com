import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
    ogImage: z.string().optional()
  })
});

export const collections = { blog };
