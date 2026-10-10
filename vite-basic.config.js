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
    // Automatically open the basic version during 'npm run dev:basic'
    open: "/index-basic.html",
  },
});
