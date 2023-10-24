const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 3000, //Timeout padrão pro projeto inteiro
    setupNodeEvents(on, config) {
  
      // implement node event listeners here
    },
  },
});
