// vite-basic.visualizer.config.js
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    rollupOptions: {
      // Define the custom entry point here
      input: {
        main: "index-basic.html",
      },
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
    // Automatically open the basic version during 'npm run dev:basic'
    open: "/index-basic.html",
  },
});
