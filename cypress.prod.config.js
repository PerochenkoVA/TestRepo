const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "76ietr",
  e2e: {
    baseUrl: "https://santa-secret.ru/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    environment: "production",
    email: "it.switcher.test@gmail.com",
    password: "DG6787",
  },
});
