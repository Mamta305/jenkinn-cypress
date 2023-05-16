const { defineConfig } = require("cypress");

 async function setupNodeEvents(on, config) {
  // implement node event listeners here
  //this is required for the pre processor to be generated json,were my test files  if it wants run files,plugins
  return config;
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    //you have to provide the path of the test script
    //will be stored as specpattern
    //for 
   specPattern:'cypress/integration/example/*.js',
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",

  },
  chromeWebSecurity:false
});
