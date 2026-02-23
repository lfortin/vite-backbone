// vite-cdn.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // Define the custom entry point here
      input: {
        main: "index-cdn.html",
      },
      // Tell Rollup which imports to ignore
      external: [
        "jquery",
        "underscore",
        "backbone",
        "handlebars",
        "bootstrap",
        "bootstrap-icons",
        "@popperjs/core",
      ],
    },
  },
  server: {
    // Automatically open the CDN version during 'npm run dev:cdn'
    open: "/index-cdn.html",
  },
  // Optional: Silence Sass deprecation warnings.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "color-functions",
          "global-builtin",
          "legacy-js-api",
          "if-function",
        ],
      },
    },
  },
});
