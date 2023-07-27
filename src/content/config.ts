import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string()
  })
});

export const collections = { posts: postsCollection };
