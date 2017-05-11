# ECMAScript 2015 Part 2

Recommended resources when you need to learn more on the job:

* [Learn ES2015 at babeljs.io](https://babeljs.io/learn-es2015/)
* [Understanding ECMAScript 6 at leanpub.com](https://leanpub.com/understandinges6)
* [JavaScript books by Dr. Axel Rauschmayer](http://exploringjs.com/)

Goal for many improvements in ES2015:

* Communicate your meaning more **declaratively** and less imperatively.
* That is, describe **what** instead of tell how.

Concise notations help you separate:

* **Generic** patterns, which you learn better and better by repetition.
* **Specific** details, which you must understand as quickly as possible for each application.

## Spread operator

In a literal array: the ... **spread operator** means “spread out” the values of an iterable (for example, an array).

Analogy: spreading out cards.

Write more array **literal** notation, instead of array methods like `concat`, `push`, and `splice`.
Still call array methods which have callback functions, like `filter`, `map`, and `reduce`.

| General pattern | Specific example |
| --- | --- |
| **Concatenate** arrays into one array | `01-spread-concatenate.js` |
| **Copy** an array. | `02-spread-copy.js` |
| **Remove** an item from an array. | `03-spread-remove.js` |
| **Append** an element to the end of an array. | `04-spread-append.js` |
| **Replace** an element in an array. | `05-spread-replace.js` |

In a function call, the ... **spread operator** means “spread out” the values of an iterable (for example, an array) as separate parameters:

* `06-spread-parameters.js`
* `01-react/07-spread-createElement.js` see below

```sh
cd 01-react

npm install

node 07-spread-createElement.js > 07-spread-createElement.html
# open 07-spread-createElement.html in a Web browser
```

## Rest parameter

In a function definition: when ... precedes the last named parameter, it is a **rest parameter** whose  value is an array which contains the rest of the parameters when the function is called.

Analogy: gathering up cards.

* `08-rest-parameter.js`

## Array destructuring

With a similar **literal** notation, put together and take apart an array.

* `09-array-destructuring.js`

## Object shortcut and destructuring

With a similar **literal** notation, put together and take apart an object.

* `10-object-destructuring.js`
* `11-object-shortcut.js`
* `02-class/src/state.js` look for the `/* comment */`

## Class

In *Understanding ECMAScript 6*, Nicholas C. Zakas writes:

* They [ECMAScript classes] have a uniqueness that embraces the dynamic nature of JavaScript.
* All code inside class declarations runs in strict mode automatically.

```sh
# download or copy jquery.js to the 2017-05-11 directory
cd 02-class

npm install

npm run build
# open todos.html in a Web browser
```

## Module

In *Understanding ECMAScript 6*, Nicholas C. Zakas writes:

* A *module* is JavaScript code that automatically runs in strict mode.
* The real power of modules is the ability to export and import only bindings you need rather than everything in a file.
* Variables created in the top level of a module aren’t automatically added to the shared global scope.
* The value of `this` in the top level of a module is `undefined`.
* *Scripts* include any JavaScript code that isn’t a module.

```sh
cd 03-module

# open todos.html in Safari 10.1

# or in Firefox 54 after you toggle in about:config dom.moduleScripts.enabled
# see
# https://developer.mozilla.org/en-US/Firefox/Experimental_features
# https://developer.mozilla.org/en-US/Firefox/Releases/
```

### Named export

> You can place `export` in front of any variable, function, or class declaration to export it [by name] from the module. Apart from the `export` keyword, every declaration is the same as it would be in a script.

### Named import

> The list of bindings to `import` looks similar to a destructured object, but it isn’t one.

> When you’re importing a binding from a module, the binding acts as though it was defined using `const`.

> Be sure to include `/`, `./`, or `../` at the beginning of the string representing the file you’re importing for the best compatibility across browsers and Node.js.

### Default import and export

> The module syntax is optimized for exporting and importing default values from modules, because this pattern was quite common in other module systems, such as CommonJS. The *default value* for a module is a single variable, function, or class as specified by the `default` keyword.

```js
import React, {Component} from 'react'; // default and named import

class MyComponent extends Component {
  // optional constructor
  // optional methods
  render() {
    return /* a tree of React elements */;
  }
}

export default MyComponent; // default export
```

### Loading modules

> Rather than trying to create a single specification that would work for all JavaScript environments, ECMAScript specifies only the syntax and abstracts out the loading mechanism. Web browser and Node.js developers are left to decide how to implement it in a way that makes sense for their environments.

Browsers require module specifiers in `import` statement to be in one of the following formats:

* Begin with `/` to resolve from the root directory
* Begin with `./` to resolve from the current directory
* Begin with `../` to resolve from the parent directory
* URL format

```html
<!-- load a module from a file -->
<script type="module" src="module.js"></script>

<!-- include a module as inline JavaScript code -->
<script type="module">
/* inline JavaScript code */
</script
```

## Challenge

```sh
cd 04-challenge

npm install --save react react-dom

# in `04-challenge/src/interface.js` convert
# from template literals and jQuery
# to `React.createElement`

npm run build
# open todos.html in a Web browser
```

Review: `React.createElement(type, props, ...children)`

* type: for example, `'li'`
* props:
  * `null` if no props
  * object with keys in camelCase instead of hyphens for attributes/properties
* children:
  * text: for example, `'Todo list'`
  * child element: `React.createElement`

## Homework

Read:

* Mark Pedrotti: [Arrow functions, plus bonus destructuring and shortcut](https://speakerdeck.com/pedrottimark/arrow-functions-columbia-front-end)
* Jake Archibald: [ECMAScript modules in browsers](https://jakearchibald.com/2017/es-modules-in-browsers/)
* Nicholas C. Zakas: [Sets and Maps](https://leanpub.com/understandinges6/read#leanpub-auto-sets-and-maps)
