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
};
