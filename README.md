
# `hello_jest` A hello world example of testing javascript using Jest


[![Build Status](https://travis-ci.org/AaronWatters/hello_jest.svg?branch=master)](https://travis-ci.org/AaronWatters/hello_jest)
[![Coverage Status](https://coveralls.io/repos/github/AaronWatters/hello_jest/badge.svg?branch=master)](https://coveralls.io/github/AaronWatters/hello_jest?branch=master)

This repository is intended to provide a relatively simple and minimal example of Javascript testing and code coverage
for a client side Javascript module, specifically for jQuery
plugins.

I hope people (like me) find it helpful when they want to create `npm` modules with
automated testing and coverage reports.

To enable continuous integration and code coverage evaluation I registered
this repository with the Travis CI service and the coveralls coverage
service.

# What are the files?

Here are the files used in the package
In some cases they are copied from other places and I don't understand
fully their significance, but I needed them to get everything working.

### `hello_jest/src/my_plugin.js`

This is a silly `jQuery` plugin implementation which is supposed to represent
the main logic of the module that we want to test and publish.

### `hello_jest/tests/my_plugin.test.js`

These are the javascript tests to validate the plugin
written to be run by `jest`.

### `hello_jest/src/index.js`

This is the module index file used by `npm` for creating the module package.
It lists everything which should be included in the module.

### `hello_jest/package.json`

This is the `npm` package description for the module.   It describes how to build,
test, and package the module and the module top level dependencies and so forth.

### `hello_jest/jest.config.js`

This is the jest configuration file.  It describes the test environment (such
as environment globals) and where to put the coverage report, among other things.

### `hello_jest/.travis.yml`

This file tells the Travis continuous integration service how to run the
tests and register the coverage report.

### `hello_jest/.babelrc`

This file tells the babel preprocessor how to translate javascript.

### `hello_jest/.eslintrc.js`

This is a configuration file for the eslint code
quality tool.

### `hello_jest/start_test_http_server.py` and `hello_jest/start_test_http_server.py`

These scripts are intended to start and stop a
simple HTTP server for end to end testing.  
They are not currently used because end to end testing
is not implemented.

### `hello_jest/dist/`

These directory contains the published content of the module
consisting of javascript modules compiled by `babel`.

### `hello_jest/html/`

This directory contains a test use of the module in a vanilla
HTML web page.  The bundled content is built using
`parcelify` and `browserify`.


# What are the dependencies in `package.json`

There is only one non-development dependency: `jQuery` is
the framework for the plugin in the module.

### `jest`

This is the testing framework used for unit tests.

### `"babel-*"`

These modules have something to do with the babel
preprocessor/transpiler which is used to convert javascript
to portable dialects.  I'm not sure they are all needed.

### `coveralls`

This module has something to do with measuring coverage
and generating coverage reports and registering the reports
with the coveralls service.

### `eslint-*`

Linting tools for assessing coding conventions and quality.

### `browserify`

This tool takes `node`-like modules organized using "imports"
and packages them into a single bundled Javascript file for loading
in an HTML page.

### `parcelify`

This tool looks for CSS files in module dependencies and bundles
them into a single CSS file for loading in an HTML page.

### `opener` 

This script opens a browser to a static HTML page.


# Background

This repository is built

- [Using https://jestjs.io/](https://jestjs.io/) and
- with continuous integration using [https://travis-ci.org/](https://travis-ci.org/) and
- with code coverage for unit tests using mocking.

# Eventually

I wanted to add

- with a headless browser [https://github.com/GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer) 
for end to end tests.

But I'm giving up on that for now.  Maybe later I will return.

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
- https://docs.npmjs.com/cli/link npm link for creating a local link to a package.
- https://jaketrent.com/post/npm-install-local-files/ using tarballs.

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