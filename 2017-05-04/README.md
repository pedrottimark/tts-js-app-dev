# ESLint and webpack

Suggestion to keep from losing your work the next time you pull a new lesson.

```sh
# BEFORE you pull the files for this lesson:
git checkout master

git pull

# AFTER you pull the files for this lesson, create a branch with the date:
git checkout -b 2017-05-04

# do the exercises and challenges
```

1. [Download jQuery](http://jquery.com/download/) to the `2017-05-04` directory.
2. Rename it as `jquery.js`
3. Open `00-script/todos.html` in a browser and make sure that it works.

## Exercise 1: review Jest

[Getting Started](http://facebook.github.io/jest/docs/en/getting-started.html)

```sh
cd 2017-05-04/01-jest

npm init # when it prompts you for the test script, enter: jest

npm install --save-dev jest

npm test
```

[Expect](http://facebook.github.io/jest/docs/en/expect.html#content)

* compare `toEqual` to `toMatchObject` assertion
* write an `invariant` assertion to verify what you assume about test data
* demonstrate how test-first might find a mistake in new or refactored

## Exercise 2: ESLint

[Integrations: Editors](http://eslint.org/docs/user-guide/integrations#editors)
[Getting Started with ESLint](http://eslint.org/docs/user-guide/getting-started)
[Configuring ESLint](http://eslint.org/docs/user-guide/configuring)
[Rules](http://eslint.org/docs/rules/)

```sh
npm install --save-dev eslint
```

In `package.json` add to the `eslintConfig` property:

* [parserOptions](http://eslint.org/docs/user-guide/configuring#specifying-parser-options)
  * `"ecmaVersion": 5` at first, but increase to `6` because template literals
  * `"sourceType": "module"` because CommonJS modules
* default parser because standard ECMAScript
* [env](http://eslint.org/docs/user-guide/configuring#specifying-environments)
  * `"node": true` for `module` and `require`
  * `"jest": true` for `describe` and `it` and `expect`
  * `/* eslint-env browser */` for `document`
  * `/* eslint-env jquery */` for `$`
* [extends](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
  * `"extends": "eslint:recommended"`
* [rules](http://eslint.org/docs/user-guide/configuring#configuring-rules)
  * `"eol-last": "error"` to report errors
  * `"no-console": "off"` to turn off a recommended rule
  * `"indent": ["error", 2]` some rules have options

In addition to editor integration, add a script to `package.json`

## Exercise 3: Webpack

[Webpack from First Principles](https://youtu.be/WQue1AN93YU)

* [Getting Started](https://webpack.js.org/guides/get-started/)
* [Migrating from v1 to v2](https://webpack.js.org/guides/migrating/)
* [Concepts](https://webpack.js.org/concepts/)
  * [Entry Points](https://webpack.js.org/concepts/entry-points/)
  * [Output](https://webpack.js.org/concepts/output/)
  * [Loaders](https://webpack.js.org/concepts/loaders/)
  * [Plugins](https://webpack.js.org/concepts/plugins/)

```sh
npm install --save-dev webpack
```

1. Let’s review together the changes to make Todos application use CommonJS modules.
2. `install --save jquery`
3. Look at `webpack.config.js`
  * `entry`
  * `output`
4. Look at `build` script in `package.json` and then `npm run build`
5. See that webpack created `build/bundle.js`
6. See that the `script` in `todos.html` refers to `./build/bundle.js`

## Challenge 3a: Bundle the styles

1. Add `require('../todos.css')` in `/src/root.js`
2. Install loaders

   ```sh
   npm install --save-dev style-loader css-loader
   ```

3. Add the following to `webpack.config.js`

   ```js
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           {loader: 'style-loader'},
           {loader: 'css-loader'},
         ],
       }
     ]
   }
   ```

4. Delete the `link` element to the stylesheet from `todos.html`

## Challenge 3b: Bundle an image

1. Add an image of your choice to `03-webpack` directory.
2. Refer to it in the todos.css
3. Add a rule for images to your webpack configuration
4. Rebuild the application bundle

## Homework

1. Listen to the [Webpack from First Principles](https://youtu.be/WQue1AN93YU) video
2. Do [Webpack for React](http://www.pro-react.com/materials/appendixA/) tutorial
  * The tutorial is for version 1: `npm install --save-dev webpack@1.12.0`
  * Skip over **Babel**
  * Do **Stylesheets**
  * And then stop when you arrive at **CSS Modules**
3. Listen to the [Webpack from First Principles](https://youtu.be/WQue1AN93YU) video again :)
