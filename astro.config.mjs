import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://www.masterpaint2548.com/",
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
