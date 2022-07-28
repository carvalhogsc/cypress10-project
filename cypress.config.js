const { defineConfig } = require("cypress");
var _ = require('lodash');

const configObject = {
  develop: {
    baseUrl: "https://demo.automationtesting.in"
  },
  homolog: {
    baseUrl: "https://demo.automationtesting.in"
  }
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      const file = config.env.configFile || 'develop'
      _.merge(config, configObject[file])
      return config
    },
  },
});
