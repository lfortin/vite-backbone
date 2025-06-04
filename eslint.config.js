import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: ["public/**", "dist/**", "coverage/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        $: "readonly",
        jQuery: "readonly",
        _: "readonly",
        Backbone: "readonly",
        Handlebars: "readonly",
      },
    },
  },
  {
    files: ["tests/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.vitest,
        $: "readonly",
        jQuery: "readonly",
        _: "readonly",
        Backbone: "readonly",
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
