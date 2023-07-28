import { formatDate, getBaseUrl } from '@/lib/utils';
import type { APIContext, Props } from 'astro';
import { OGImageRoute } from 'astro-og-canvas';

// Import all pages from the content directory
const rawPages = import.meta.glob('/src/content/**/*.md', { eager: true });

// Remove the /src/content/ prefix from the paths
const pages = Object.entries(rawPages).reduce((acc, [path, page]) => {
  const newPath = path.replace('/src/content/', '');
  return { ...acc, [newPath]: page };
}, {});

export const { getStaticPaths, get: generateResponse } = OGImageRoute({
  pages,
  param: 'route',
  getImageOptions: (_, page) => {
    const date = formatDate(page.frontmatter.date);
    return {
      title: page.frontmatter.title,
      description: `${page.frontmatter.description}\n\n${date}`,
      fonts: [`${getBaseUrl()}/fonts/Inter.var.woff2`],
      bgGradient: [[2, 8, 23]],
      logo: {
        path: './public/bird.png',
        size: [64]
      },
      font: {
        title: { color: [245, 245, 245], weight: 'Bold', size: 60 },
        description: { color: [163, 163, 163], size: 36 }
      }
    };
  }
});

export async function get(context: APIContext<Props>) {
  const response = await generateResponse(context);
  const headers = new Headers({ 'content-type': 'image/png' });
  return new Response(response.body, { headers });
}
