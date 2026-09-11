import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Before deploying, change `site` to your GitHub Pages domain.
// Example: https://yourusername.github.io
// If your repository is named <username>.github.io, remove `base`.
export default defineConfig({
  site: 'https://alamsyah10.github.io',
  base: '/optimization-portfolio',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
