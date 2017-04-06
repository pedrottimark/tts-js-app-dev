# Lesson 4: Functions, scope, closure, and this

## Review of functions

A function consists of:

* name (optional, see below)
* arguments, also known as parameters (optional) are its explicit inputs
* body
* return value (optional, it’s `undefined` if not specified) is its explicit output

You can **define** a function:

* by a **declaration**, which gives a name to the function:

  ```js
  // Return a random non-negative integer that is less than n.
  function randomInt(n) {
    return Math.floor(Math.random() * n);
  }
  ```

* by an **expression**, which might become the value of a variable:

  ```js
  // Unlike a declaration, a function expression doesn’t have its own name.
  var randomInt = function (n) {
    return Math.floor(Math.random() * n);
  }
  ```

  or which might be an argument to another function:

  ```js
  // A callback function expression is often known as an anonymous function.
  [1, 2, 1, 2, 0, 0, 0, 1, 0, 1].forEach(function (number) {
    console.log(number);
  });
  ```

## Scope

The **scope** of a name (for example, name of function or variable) is the code that can refer to it. A function body can refer to the names whose scope includes it. Sometimes you look at it the other way around: those names are **in scope** for the function body.

* In most programming languages, the scope of a variable is limited to the innermost **block** in which it is declared.
* In ECMAScript 5 and earlier, the scope of a variable is limited to the innermost **function body** in which it is declared; otherwise to the **script file** in which it is declared.

[ESLint](http://eslint.org/) (a code quality tool) has [rules](http://eslint.org/rules/) to report problems related to scope:

* [no-undef](http://eslint.org/docs/rules/no-undef) disallow undefined variables
* [no-shadow](http://eslint.org/docs/rules/no-shadow) disallow variable declarations from shadowing variables declared in the outer scope

Lexical scope means that you can **read** the code to see the scope of a name. To resolve a name, JavaScript starts in the immediate scope, and then outer scopes, in order.

## Closure

The body of a function can refer to:

* the **arguments** of the function, which are its explicit inputs
* the names declared **outside**, which are in scope for its body
* the names declared **inside**, whose scope is limited to its body

Each time you call a function, JavaScript creates a new **closure** of names that its body can refer to:

* the **arguments**, which have values from the function call, are “private” to each call
* the names declared **outside** are “shared” by all calls
* the names declared **inside** are “private” to each call

Closure is a brilliant feature of JavaScript, so you can write callback functions to handle events in interactive applications.

## this

As an alternative to functions that refer to **private** variables in a closure, functions can return object instances whose methods refer to **public** properties.

Object-oriented programming is a style where `this` refers to the state of an object.

Inside a function body, `this` refers to an object instance, especially to a **method invocation**: `object.method(/* arguments */)`
