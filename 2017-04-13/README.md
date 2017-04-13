# Lesson 6: Developing event-oriented applications

Learning objective: Make objects and functions work better together (especially with React and Redux) than they work separately.

Let’s shift the emphasis from object-oriented programming as a technique to **event-oriented** applications as a goal.

To limit complexity of an interactive application, you break it into **chunks** which have tight cohesion and loose coupling.

Examples:

* Object chunks: **components** in React and **store** in Redux.
* Function chunks: **lifecycle methods** in React and **reducer** in Redux.

Comparison:

* An **object** can combine data and methods which relate to each other:

  ```js
  var object = Object.create({
    addItem: function (item) {
      this.items.push(item);
    }
  });

  object.items = []; // data
  object.addItem('^'); // method
  ```

* A **function** can make all inputs explicit as arguments:

  ```js
  function addItem(items, item) {
    items.push(item);
  }

  var items = [];
  addItem(items, '^');
  ```

## Overview of function invocations

A function **invocation** is a technical term for a function call.

For a non-arrow function, the value of `this` when it is called depends on **how** it is called.

* An **impure** function with **mutable** data. See second `addItem` above.

* A **pure** function with **immutable** data.

  ```js
  function addItem(items, item) {
    return items.concat(item);
  }

  var itemsPrev = [];
  var itemsNext = addItem(itemsPrev, '^');
  ```

* A **method** of an object (which has **mutable** state). See first `addItem` above.

* `apply` a function whose body refers to `this` with an object as context.

  ```js
  function joinItems(string) {
    return this.items.join(string);
  }

  var joined = joinItems.apply(object, [' ']);
  ```

* `call` a function whose body refers to `this` with an object as context.

  ```js
  var joined = joinItems.call(object, ' ');
  ```

* `bind` a function whose body refers to `this` with an object as context, or another argument, or both.

  ```js
  var joinItemsInThisObject = joinItems.bind(object);
  var joined = joinItemsInThisObject(' ');
  ```

  ```js
  var joinItemsInThisObjectWithString = joinItems.bind(object, ' ');
  var joined = joinItemsInThisObjectWithString();
  ```

* `new` causes a constructor function invocation to return an instance.

  ```js
  function Items() {
    this.items = [];
  }

  Items.prototype.add = function (item) {
    this.items.push(item);
  };

  var object = new Items();
  object.add('^');
  ```

## When do you need to bind context or arguments?

The **context** of a function call determines the value of `this` in the function body.

### You don’t need to bind context in method invocations

In a method invocation like `landscape.undoable()` the context of `landscape` is explicit.

```js
function update() {
  outputElement.innerHTML = landscape.getString();
  if (undoButton) {
    undoButton.disabled = !landscape.undoable();
  }
}
```

### You do need to bind context in function invocations

Even though `landscape.undo` is a reference to a method, it will be called as an ordinary function. That is, `callback()` doesn’t have `landscape` as its context to determine the value of `this` for `this.items.pop()` in the function body.

```js
function makeEventListener(callback) {
  return function () {
    callback(); // for example, add land
    update(); // update interface after each action
  }
}

undoButton.addEventListener('click', makeEventListener(landscape.undo));
```

Here are the clues to observe:

* **With** parentheses is a method invocation: `landscape.undoable()`
* **Without** parentheses is a reference to a method: `landscape.undo`
* **With** parentheses later is an ordinary function call: `callback()`

### How do you bind context or additional arguments?

* Return a function **closure** that contains a method invocation.

  ```js
  undoButton.addEventListener('click', makeEventListener(function () {
    landscape.undo(); // method invocation
  });
  ```

  ```js
  addButton.addEventListener('click', makeEventListener(function () {
    landscape.add(key); // method invocation
  }));
  ```

* Explicitly **bind** context or arguments to a function reference.

  ```js
  undoButton.addEventListener('click', makeEventListener(landscape.undo.bind(landscape)));
  ```

  ```js
  addButton.addEventListener('click', makeEventListener(landscape.add.bind(landscape, key)));
  ```

## How to create instances of objects

We recommend that a **virtual** constructor function returns the instance, because the calling code does not need which of the following techniques you decided to use:

* A function returns a literal object which refers to private variables in a **closure**. For example, `createStore(reducer)` in Redux returns a store object whose methods refer to the state in a closure.

* Create an instance from a generic **prototype** object and assign specific **instance** properties.

  ```js
  var prototype = {
    addItem: function (item) {
      this.items.push(item);
    },
    // and so on
  };

  function constructObject() {
    return Object.assign(Object.create(prototype), {
      items: []
    });
  }
  ```

* Return an instance from a **constructor** function call that is preceded by the `new` operator.

  ```js
  function Items() {
    this.items = [];
  }

  Items.prototype.addItem = function (item) {
    this.items.push(item);
  };
  // and so on

  function constructObject() {
    return new Items();
  }
  ```

## Challenge 1: constructor

Fill in the missing parts of a `LandscapeLogic` constructor function. Concerning the `dataInitial` argument:

* It always has an `additions` property which is an object. Store a copy of the object (instead of a reference to the object).
* It has an `items` property if the landscape was saved in a previous session. Store a copy of the array (instead of a reference to the array).
* It does’t have an `items` property if the landscape is new in the current session. The initial value is an empty array.

## Challenge 2: prototype

Implement the methods of a `LandscapeLogic` class.

## Challenge 3: minimal event-oriented application

1. Open the `challenge-3/landscape.js` file in an editor.
2. Open the `challenge-3/landscape.html` file in an editor and in a web browser.
3. Enjoy and explore the application for a minute.
4. Look at the markup in the `landscape.html` file. Notice there are no `onClick` handlers in the markup.
5. To see with your own eyes why you need to bind an event handler, replace `landscape.undo.bind(landscape)` with `landscape.undo` in `landscape.js` to break the **undo** button. Refresh and test the change. Then undo the replacement :)
6. Change the `addItem` method in `landscape.js` to store in the items property the keys instead of the string values from additions. Refresh and test the change.
7. Change the `getString` method in `landscape.js` to use a `map` method and anonymous callback function to convert from keys to string values before it calls the `join` method. Refresh and test the change. From this and the preceding step, what is a potential benefit related to data normalization?
8. Add a `getData` method to return an object with the same structure as the `dataInitial` argument of the constructor function. When would the application use this method?
9. Edit the `landscape.html` file to add a **rückgängig machen** (that means undo in German :) button to the second landscape area.

**Bonus**: Work with Mark, an assistant, or a classmate to:

1. Make your own fork of the `tts-js-app-dev` project.
2. Make a clone of the fork on your computer.
3. Make a branch (include your GitHub user name) to work on Challenge 3. For example: `git checkout -b challenge-yourusername`
4. Make a copy of the `challenge-3` directory with your GitHub user name appended. That is, `cp -R challenge-3 challenge-3-yourusername`
5. When you have finished, add your changes to the commit: `git add --all`
6. Commit the changes: `git commit -m "Solution to challenge 3 by Your Name"`
7. Push the changes to your fork. For example: `git push origin challenge-3-yourusername`
8. On GitHub, look at the **Files Changed** tab.
9. When you are ready, submit the pull request!

## Composition

Here is a quick test to distinguish composition from inheritance:

* Composition: **has-a** relationship is more common. For example, landscape logic **has** additions and items.
* Inheritance: **is-a** relationship is less common. For example, a list box which scrolls as you type **is a** list box.

## Homework exercise

To see another way that mutable objects and pure functions can work well together, take `landscape.js` from Challenge 3 one step farther.

1. Copy to `landscape.js` the `addItem` function from the `invocation/02-function-pure.js` file.
2. Change the implementation of `LandscapeLogic.prototype.addItem` to call the `addItem` function.
3. Write a few test cases for the `addItem` function. See below for an example of a test to add an item to a non-empty array.
4. Write similar tests for the `addItem` method of the `LandscapeLogic` class.
5. What do you think about the pros and cons of testing the function compared to the method?

```js
var itemsPrev = ['land', 'tree'];
var item = 'water';
var itemsNext = addItem(itemsPrev, item);
console.log(itemsNext.length === itemsPrev.length + 1);
console.log(itemsNext[itemsNext.length - 1] === item);
```
