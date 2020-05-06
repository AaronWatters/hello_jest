// jest.config.js
module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    globals: {
      URL: "http://localhost:8080"
    },
    testURL: "http://localhost:8000/",
    "setupFiles": [
      "./jest/globals.js"
    ], 
   "coverageDirectory": "./tests/coverage",

   "coveragePathIgnorePatterns": [
      "./jest",
    ],
    // A path to a module which exports an async function that is triggered once before all test suites
    "globalSetup": "./jest/globalSetup.js",
  
    // A path to a module which exports an async function that is triggered once after all test suites
    "globalTeardown": "./jest/globalTeardown.js",
};
