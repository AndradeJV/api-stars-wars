const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://swapi.dev/api/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
