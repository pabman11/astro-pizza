import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://pabman11.github.io/',
  base: '/astro-pizza/',
  integrations: [tailwind()]
});