// vite.visualizer.config.js
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  build: {
    rollupOptions: {
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
});
