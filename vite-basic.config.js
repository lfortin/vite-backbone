// vite-basic.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      // Define the custom entry point here
      input: {
        main: "index-basic.html",
      },
    },
  },
  server: {
    // Automatically open the CDN version during 'npm run dev:cdn'
    open: "/index-basic.html",
  },
});
