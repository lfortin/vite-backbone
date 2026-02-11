// vite-cdn.visualizer.config.js
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

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
      plugins: [
        visualizer({
          open: true, // Set to false if you don't want it to auto-open
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
  server: {
    // Automatically open the CDN version during 'npm run dev:cdn'
    open: "/index-cdn.html",
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
});
