import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        Backbone: "readonly",
        jQuery: "readonly",
        $: "readonly",
        Handlebars: "readonly",
      },
    },
  },
  {
    files: ["tests/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.vitest,
        Backbone: "readonly",
        jQuery: "readonly",
        $: "readonly",
        Handlebars: "readonly",
      },
    },
  },
  {
    files: ["tests/setup.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        global: "writable",
      },
    },
  },
]);
