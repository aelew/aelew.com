import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? 'http://localhost:3000' : 'https://aelew.com',
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]]
  },
  integrations: [
    tailwind({ configFile: './tailwind.config.cjs', applyBaseStyles: false }),
    react()
  ]
});
