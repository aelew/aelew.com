import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? 'http://localhost:3000' : 'https://aelew.com',
  experimental: {
    viewTransitions: true
  },
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]]
  },
  integrations: [
    tailwind({ configFile: './tailwind.config.cjs', applyBaseStyles: false }),
    react(),
    sitemap()
  ]
});
