const { setup: setupDevServer } = require('jest-dev-server')
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

module.exports = async function globalSetup(globalConfig) {

  await setupDevServer({
    command: 'http-server . -p 3000',
    launchTimeout: 10000,
    port: 3000
  })

  await setupPuppeteer(globalConfig);

  console.log("globalSetup.js was invoked");
}