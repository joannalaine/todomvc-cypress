const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://todomvc.com/examples/react",
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
