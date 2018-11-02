
# `hello_jest` A hello world example of testing javascript using Jest

This repository is intended to provide a relatively simple and minimal example of Javascript testing.

To get a build started in travis you have to push a change to the repository!

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