const { defineConfig } = require("cypress");

module.exports = defineConfig({
viewportHeight: 800,
viewportWidth: 1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
