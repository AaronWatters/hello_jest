
# `hello_jest` A hello world example of unit testing and end-to-end testing of Javascript using Jest


[![Build Status](https://travis-ci.org/AaronWatters/hello_jest.svg?branch=master)](https://travis-ci.org/AaronWatters/hello_jest)
[![Coverage Status](https://coveralls.io/repos/github/AaronWatters/hello_jest/badge.svg?branch=master)](https://coveralls.io/github/AaronWatters/hello_jest?branch=master)

This repository provides a relatively simple and minimal example of Javascript testing and code coverage
for a client side Javascript module, specifically for jQuery plugins.  It features

- **Unit tests** which make use of **mocked web environments**.
- **End-to-end integration tests** which make use of real web environments by using a **headless browser**.

I hope people like me find these examples helpful when they want to create `npm` modules with
automated testing and coverage reports.

The repository illustrates how to use the following technologies:

- <a href="https://jestjs.io/">The Jest Javascript testing framework (https://jestjs.io/).</a>

- <a href="https://github.com/puppeteer/puppeteer">The 
puppeteer Headless Chrome Node.js API (https://github.com/puppeteer/puppeteer).</a>

- <a href="https://github.com/smooth-code/jest-puppeteer">The jest-puppeteer integration helper module
(https://github.com/smooth-code/jest-puppeteer).</a>

- <a href="https://learn.jquery.com/plugins/basic-plugin-creation/">jQuery and how to build a jQuery plugin
(https://learn.jquery.com/plugins/basic-plugin-creation/).</a>

- Various other technologies (`babel, browserify, opener, parcelify, http-server...`) which I needed to get
everything working.  

The techniques used were here adapted from examples linked below in the References section.
Thanks everyone!

To enable continuous integration and code coverage evaluation I registered
this repository with 

- <a href="https://travis-ci.org/github/AaronWatters/hello_jest">- 
The Travis continuous integration service (https://travis-ci.org/github/AaronWatters/hello_jest)</a> and 

- <a href="https://coveralls.io/github/AaronWatters/hello_jest?branch=master">
The coveralls code coverage service (https://coveralls.io/github/AaronWatters/hello_jest?branch=master).</a>

# Prerequisites

To run the tests in this package you will need a recent version of 
<a href="https://nodejs.org/">node (https://nodejs.org)</a> and 
<a href="https://www.npmjs.com/">npm (https://www.npmjs.com/)</a> installed on your computer.
```
$ node --version
v10.13.0
$ npm --version
6.14.4
```
 
# Command lines

Before running the tests you need to install the package development dependencies. You need `http-server` too, and for some reason I had to install it globally.  Install them like this:

```
npm install --global http-server
npm install
```

To test:

```
npm run build
npm run test
```

To run one end-to-end test and see the browser:

```
HEADLESS="false" jest -t "sets the html using the plugin"
```

To admire the sample html:

```
npm start
```

# What are the files?

Here are the files used in the package
In some cases they are copied from other places and I don't understand
fully their significance, but I seemed to need them to get everything working.

## Functionality and Test Files

The central files of the package are the files that define
the functionality to be tested and the tests themselves, as listed below.

### `./src/my_plugin.js`

This is a silly `jQuery` plugin implementation which is supposed to represent
the main logic of the module that we want to test and publish.  It depends on 
<a href="https://jquery.com/">jQuery</a>,
and so is not completely trivial.

### `./tests/my_plugin.test.js`

These are the javascript unit tests to validate the plugin,
written to be run by `jest`.  They do not use the headless browser.
As unit tests they test the plugin code directly in relative isolation for example
directly calling:
```
        var elt = jQuery("<b>test</b>");
        elt.plugin_functionality({html: "whoop", italic: true});
```

Note that to run as unit tests when `jest` is configured to run a headless browser using `puppeteer`
the test script must include  the `@jest-environment jsdom` directive.
The directive instructs
`jest` to load browser environment unit test emulation instead of using the headless browser.
The directive should be placed at the top of the unit test code file like this:

```node
/**
 * @jest-environment jsdom
 */

import hello_jest_is_loaded from "../dist/index";

describe('testing my_plugin', () => {

    it('loads the index', () => {
        expect(hello_jest_is_loaded()).toBe(true);
    });
    ...
  });
```

### `./tests/headless.test.js`

These are "end to end" tests which use a headless browser.
They load a test page in a real browser context and then query the contents
of the page to see if the code in the page and javascript loaded by the page
ran correctly.  These tests interact with javascript on the loaded
pages indirectly using the `puppeteer` APIs such as:
```
        var content = await page.evaluate(async () => window.jQuery('#target').text());
```

## Other infrastructure files

In addition to the functionality and the tests, quite a few additional
files define how to set up the package and the testing environment, as listed below.

### `./src/index.js`

This is the module index file used by `npm` for creating the module package.
It lists all the javascript components which should be included in the module.

### `./package.json`

This is the `npm` package description for the module.   It describes how to build,
test, and package the module and the module top level dependencies and so forth.

### `./jest.config.js`

This is the jest configuration file.  It describes the test environment (such
as environment globals) and where to put the coverage report, among other things.

### `./jest-puppeteer.config.js`

This file configures the puppeteer library and defines how to launch the headless
browser for end to end testing,

### `./jest/globals.js`

Javascript file with the global test environment definitions for jest.

### `./jest/globalSetup.js` and `./jest/globalTeardown.js`

These javascript files set up and tear down the HTTP server and the Puppeteer service for end-to-end testing.

### `./.travis.yml`

This file tells the Travis continuous integration service how to run the
tests and register the coverage report.

### `./.babelrc`

This file tells the babel preprocessor how to translate javascript.

### `./.eslintrc.js`

This is a configuration file for the eslint code
quality tool.

### `./dist/`

These directory contains the published content of the module
consisting of javascript modules compiled by `babel`.

## The test server root `./html/`

The end-to-end tests and `npm run start` load HTTP artifacts from the
`./html/` root folder which contains both static files and files built using `npm run build`.
This directory contains a test use of the module in a vanilla
HTML web page.  The bundled content is built using
`parcelify` and `browserify`.

### `./html/index.html`

This is the test page loaded by `npm run start` and the end-to-end tests.

### `./html/entry.js`

This defines the javascript environment loaded into the `index` page.  It is converted
to `bundle.js` during the build process.

### `./html/bundle.css` and `./html/bundle.js`

These are the bundled CSS and Javascript files loaded by the `index` page.  They are
created during the build process.


# What are the dependencies in `package.json`?

There is only one non-development dependency: `jQuery` is
the framework for the plugin in the module.  The development dependencies are discussed below.

### `jest`

This is the testing framework used for unit tests.

### `puppeteer`

The puppeteer library controls the headless browser during end-to-end testing.

### `jest-puppeteer`

This library provides methods for invoking `puppeteer` functionality from `jest` test suites.

### `jest-dev-server`

This library implements logic that allows `jest` to set up and tear down an HTTP server
used for end-to-end tests automatically.  Note that the library does not itself implement
the server -- here configure the library to use the external `http-server` node script to launch the server.

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

This script opens a browser to a static HTML page.  It is used by `npm run start`.


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
- https://medium.com/touch4it/end-to-end-testing-with-puppeteer-and-jest-ec8198145321
- https://stackoverflow.com/questions/53960303/whats-config-start-js-in-usage-example-for-jest-dev-server
