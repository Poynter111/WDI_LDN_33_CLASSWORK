# TDD Tic Tac Toe

## Description

A client-side test setup for HTML and vanilla JS using Karma, Mocha, Chai and PhantomJS

## Setup

- clone or download the repo
- `yarn install` or `npm install` to install dependencies
- `yarn start` or `npm start` to start the server
- `yarn test --single-run` to run the tests
- `yarn test` to run tests on changes

## Dependencies

- [Karma](https://karma-runner.github.io/2.0/index.html)
- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/) - assertion library
- [PantomJS](http://phantomjs.org/) - headless browser
- [Babel](http://babeljs.io/) - transpiler (ES6 -> ES5)
- [karma-html2js-preprocessor](https://github.com/karma-runner/karma-html2js-preprocessor) - converts HTML files into JS strings so they can be inserted into the DOM of the test browser
- [karam-babel-preprocessor](https://github.com/babel/karma-babel-preprocessor) - transpiles ES6 -> ES5 so that code can be run in Phantom

## Notes

This took a while to get sorted. [This blog post](https://sean.is/writing/client-side-testing-with-mocha-and-karma/) by [Sean Coker](https://sean.is/) was particularly useful.

I've used the [Mocha Reporter](https://github.com/litixsoft/karma-mocha-reporter) as I really like the output.

Note the `.babelrc` file and `babel-preset-env` package which are a must if you want to write ES6 code and tests. I also had to add the [babel-polyfill](https://babeljs.io/docs/usage/polyfill/), as I needed to use `Array.from` in the code base. You'll also need this if you want to use the `spread` operator.
