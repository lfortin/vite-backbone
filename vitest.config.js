// vitest.config.js
export default {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './tests/setup.js',
  },
};
