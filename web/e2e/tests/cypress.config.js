const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 10000,
  responseTimeout: 10000,
  retries: 0,
  e2e: {
  supportFile: false,
  baseUrl: 'http://localhost:4200/'
  },
});
