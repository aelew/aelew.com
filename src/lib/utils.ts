import config from 'astro.config.mjs';
import { getCollection } from 'astro:content';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  return config.site!;
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

export async function getBlogCollection() {
  const posts = await getCollection('blog');
  const baseUrl = getBaseUrl();
  return posts.map((post) => ({
    ...post,
    data: {
      ...post.data,
      ogImage: `${baseUrl}/og/blog/${post.slug}.png`
    }
  }));
}
