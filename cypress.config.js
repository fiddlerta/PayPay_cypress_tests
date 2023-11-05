const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://payment-form-test-0101.azurewebsites.net/", // this is your app
    setupNodeEvents(on, config) {
    on("before:browser:launch", (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
    });
    on("task", {
    lighthouse: lighthouse(),
    // pa11y: pa11y(console.log.bind(console)),
    });
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
