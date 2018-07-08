# NodeRestAppD

Gets data from the AppDynamics REST API with NodeJS. Uses heavily the [bluebird](http://bluebirdjs.com/docs/api-reference.html) promise library to do a bunch of fancy stuff.

## How to Use

1. Add your controller details to `config.json`
1. Download [nvm](https://github.com/creationix/nvm). Once nvm is installed, run `nvm install v8`
1. From the project directory, install dependencies with `npm install`
1. Run `npm start`

## Dev environment setup

* Install node 8 with [nvm](https://github.com/creationix/nvm)
* `npm install`
* `npm start`

### Atom Setup

If you're using Atom as your editor, here are some additional steps for
development:

* `npm install -g babel-eslint babel-preset-env eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react npm-check-updates`
* Install some atom packages `apm install atom-beautify busy-signal erb-snippets git-history intentions linter linter-eslint linter-ui-default prettier-atom`
* Change your prettier settings to use single quotes, bracket spacing, no semis,
  and trailing commas set to `es5`, and to run on save
* In `linter-eslint`, set `Use global ESLint installation` and `Global Node Installation Path`
* If you want to feel like a boss, start a dubstep playlist and run this `apm install activate-power-mode`
