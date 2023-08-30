const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup(globalConfig) {

  // set up a web server to server pages for end to end testing
  await setupDevServer({
    command: 'http-server . -p 3000',
    launchTimeout: 10000,
    port: 3000
  })

  console.log("globalSetup.js was invoked");
}