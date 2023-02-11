const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "76ietr",
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment: "staging",
    email: "it.switcher.test@gmail.com",
    password: "IL9914",
  },
});
