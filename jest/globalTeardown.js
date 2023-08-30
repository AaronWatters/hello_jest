const { teardown: teardownDevServer } = require('jest-dev-server');

module.exports = async function globalTeardown(globalConfig){

  // shut down the testing http server.
  await teardownDevServer();

  console.log("globalTeardown.js was invoked");
}
