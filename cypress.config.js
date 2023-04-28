const { defineConfig } = require("cypress");

module.exports = defineConfig({
defaultCommandTimeout: 10000,
viewportHeight: 800,
viewportWidth: 1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://simpletestsite.fabrykatestow.pl/'
  }
});
