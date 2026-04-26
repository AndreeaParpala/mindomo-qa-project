const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    setupNodeEvents(on, config) {
     
    },

    env: {
      email: "andreea.parpala02@yahoo.com",
      password: "Test123!"
    }
  },
});