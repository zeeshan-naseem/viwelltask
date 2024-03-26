const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/", // Your base URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: "cypress/support/commands.js" // Include support file for e2e tests
  },
  component: {
    supportFile: "cypress/support/commands.js" // Include support file for component tests
  },
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "mochawesome-report",
      quiet: true
    }
  },
  viewportWidth: 1280, // Adjust as needed
  viewportHeight: 720, // Adjust as needed
  parallel: true // Enable parallel mode
});