const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://bstackdemo.com", // this is your app
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
