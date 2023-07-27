import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank' }]]
  },
  integrations: [
    tailwind({ configFile: './tailwind.config.cjs', applyBaseStyles: false }),
    react()
  ]
});
