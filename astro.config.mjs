import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: "https://belljs.vercel.app",
  markdown: {
    shikiConfig: {
      theme: "catppuccin-mocha",
      wrap: true
    }
  }
});