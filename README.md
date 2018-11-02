
# `hello_jest` A hello world example of testing javascript using Jest


[![Build Status](https://travis-ci.org/AaronWatters/hello_jest.svg?branch=master)](https://travis-ci.org/AaronWatters/hello_jest)
[![Coverage Status](https://coveralls.io/repos/github/AaronWatters/hello_jest/badge.svg?branch=master)](https://coveralls.io/github/AaronWatters/hello_jest?branch=master)

This repository is intended to provide a relatively simple and minimal example of Javascript testing.  I hope people (like me) find it helpful when they want to create `npm` modules with
automated testing and coverage reports.

# What are the files?

### `hello_jest/src/my_plugin.js`

This is a silly `jQuery` plugin implementation which is supposed to represent
the main logic of the module that we want to test and publish.

### `hello_jest/src/index.js`

This is the module index file used by `npm` for creating the module package.
It lists everything which should be included in the module.

### `hello_jest/package.json`

This is the `npm` package description for the module.   It describes how to build,
test, and package the module and the module top level dependencies and so forth.

### hello_jest/jest.config.js

This is the jest configuration file.  It describes the test environment (such
as environment globals) and where to put the coverage report, among other things.


# Background

This repository is built

- [Using https://jestjs.io/](https://jestjs.io/) and
- with a headless browser [https://github.com/GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer) 
for end to end tests and
- with continuous integration using [https://travis-ci.org/](https://travis-ci.org/) and
- with code coverage for unit tests using mocking.

# References

- Trying to follow: [https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42](https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42)
- Stealing the basic structure of the project: [https://blog.npmjs.org/post/112064849860/using-jquery-plugins-with-npm](https://blog.npmjs.org/post/112064849860/using-jquery-plugins-with-npm)
- And using more information from: [https://medium.com/piecesofcode/testing-javascript-code-with-jest-18a398888838](https://medium.com/piecesofcode/testing-javascript-code-with-jest-18a398888838)
- Mimicking [https://github.com/xfumihiro/jest-puppeteer-example](https://github.com/xfumihiro/jest-puppeteer-example)
- [https://www.valentinog.com/blog/ui-testing-jest-puppetteer/](https://www.valentinog.com/blog/ui-testing-jest-puppetteer/)
- https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42
- https://github.com/ollelauribostrom/travis-coveralls-example
- https://coveralls.io/github/ollelauribostrom/travis-coveralls-example
- https://blog.npmjs.org/post/111475741445/publishing-your-jquery-plugin-to-npm-the-quick

# Setting up jest with puppeteer example:

```
  374  git clone https://github.com/xfumihiro/jest-puppeteer-example.git
  376  cd jest-puppeteer-example/
  377  node install
  382  npm install yarn -g
  384  yarn add jest-puppeteer
  390  npm install jest -g
  391  jest
```