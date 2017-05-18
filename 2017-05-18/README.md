# Lesson 16: React part 2

## Preview for this class

1. If you **did not already** install at the last class: `npm install --global create-react-app`

2. Change to a directory which you want to be the **parent** of the `todo-app` directory

3. Create the child `todo-app` directory: `create-react-app todo-app`

4. Change to the child `todo-app` directory: `cd todo-app`

5. Start the app in a Web browser: `npm start`

6. Copy some files **from** the class repo **to** the app: `cp wherever1/2017-05-18/src/*.js wherever2/todo-app/src`

7. Open the `todo-app` directory in an editor.

8. To see “hot reloading” replace `React App` with `Todo List` in the `public/index.html` file.

## Review of last class

* Let’s start with the big picture. To identify **chunks** as possible **components**:

  * Get **realistic data** instead of ~~Lorem Ipsum~~.
  * Given a wireframe diagram or actual markup: What parts go together as **chunks**?
  * Given data structure: Which parts of data affect which **chunks** of diagram or markup?
  * Given user stories: Which actions occur in which **chunks** and affect which parts or data (and therefore, affect which **chunks**).

* Minimal starter file for a React **function** component:

  ```js
  import React from 'react';

  const FunctionComponent = (/* input props */) => /* output elements */;

  export default FunctionComponent;
  ```

* Minimal starter file for a React **class** component:

  ```js
  import React, {Component} from 'react';

  class ClassComponent extends Component {
    constructor(props) {
      super(props);

      // Either or both of the following:
      this.state = {/* initial state */};
      this._onSomeEvent = this._onSomeEvent.bind(this);
    }

    _onSomeEvent(event) {
      /* handle some type of event */
    }

    render() {
      // Either of both of the following:
      const {/* relevant props */} = this.props;
      const {/* relevant state */} = this.state;
      return (
        /* output elements */
      );
    }
  }

  export default ClassComponent;
  ```

* `create-react-app` includes `babel-preset-react` so you can write elements as **JSX** (a syntax extension to JavaScript).

  * JSX: `<li key={id} className={completed ? 'completed' : 'uncompleted'}>{text}</li>`

  * JavaScript: `React.createElement('li', {key: id, className: completed ? 'completed' : 'uncompleted'}, text)`

## Review together

1. To display completion style, in the `TodoList.js` file:

  * Notice object destructuring in the argument of `TodoList` and callback function in `map` method.
  * Do what the `/* comment */` requests.

2. To display counts in the heading:

  * In the `Heading.js` file: do what the first `/* comment */` requests.
  * In the `App.js` file:
    * Add an import statement for the `Heading` component.
    * Add a `<Heading todos={todos} />` element to the rendered elements preceding `<TodoList todos={todos} />`
  * In the `Heading.js` file: do what the second `/* comment */` requests.

## Handle events when people interact

Following the example of jQuery, React provides an event system that is similar to DOM, but without browser inconsistencies and quirks.

From [https://facebook.github.io/react/docs/handling-events.html](https://facebook.github.io/react/docs/handling-events.html)

> Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences:
> * React events are named using camelCase, rather than lowercase.
> * You pass a function as the event handler, rather than a string.

### Do together: add event handler as prop of React element

The React prop looks like HTML attribute, but is equivalent to `addEventListener` method of DOM elements.

An underscore in the name of a callback method a hint that it’s “private” instead of public.

In the `App.js` file:

* Add the `import` statement for the `toggleTodo` function.
* Define the `_toggleTodo` method in the `App` class.
* Add the `onClick={this._toggleTodo}` prop to the `TodoList` element.

```js
import state from './state-data';
import {
  toggleTodo,
} from './state-reducers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = state;
  }

  _toggleTodo(id) {
    this.setState(prevState => toggleTodo(prevState, id));
  }

  render() {
    const {
      todos,
    } = this.state;

    return (
      <section className="TodoApp">
        <Heading todos={todos} />
        <TodoList onClick={this._toggleTodo} todos={todos} />
      </section>
    );
  }
}
```

In the `TodoList.js` file:

* Add `onClick` to the argument destructuring.
* Add the `onClick={() => {onClick(id);}` prop to the `li` element. This is a way to bind `id` of each item.

```js
const TodoList = ({onClick, todos}) => (
  <ul className="list">
    {
      todos.map(({completed, id, text}) => (
        <li key={id} className={completed ? 'completed' : 'uncompleted'} onClick={() => {onClick(id);}>
          {text}
        </li>
      ))
    }
  </ul>
);
```

When you click a todo item: `Uncaught TypeError`

### Bind this in constructor

We need to add an assignment in the constructor to bind this for the callback method.

* On the right side of the assignment, `this._toggleTodo` refers to a generic property of the class prototype, shared by all instances.
* On the left side of the assignment, `this._toggleTodo` refers to a property whose value is a bound method, for a specific instance.

```js
constructor(props) {
  super(props);

  this.state = state;

  this._toggleTodo = this._toggleTodo.bind(this);
}
```

### Bind this with arrow function as value of class property

You might see the following definition of a callback method using a proposed ECMAScript feature. Although create-react-app and create-react-native-app include the babel configuration to compile this feature to standard JavaScript, we recommend the preceding bind method (pardon pun :)

```js
_toggleTodo = (id) => {
  this.setState(prevState => toggleTodo(prevState, id));
}
```

### Update state in callback methods

A callback method to handle an event often updates the state of the application. In React:

* **Don’t** change the value of `this.state` directly, no never, not ever!
* **Do** call the `this.setState()` method.

### How not to refer to the previous state

From [State Updates May Be Asynchronous](https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

> React may batch multiple `setState()` calls into a single update for performance.

> Because this.props and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

```js
  _handleClick(event) {
    this.setState({
      value: this.state.value + 1, // INCORRECT EXAMPLE
    });
  }
```

### How to refer to the previous state

> Use a second form of `setState()` that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument.

```js
  _handleClick(event) {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }
```

> Think of `setState()` as a request rather than an immediate command to update the component.

> `setState()` will always lead to a re-render unless shouldComponentUpdate() returns false.

### Separate business logic from event handlers

You avoid the preceding problem if:

* An event handler is responsible for relevant values like `id` in the interaction.
* A separate function like `toggleTodo` is responsible for business logic to update state.

```js
_toggleTodo = (id) => {
  this.setState(prevState => toggleTodo(prevState, id));
}
```

## Challenge 1: Filter the list

In the `App.js` file:

* Add `changeFilter` to the `import` statement from `'./state-reducers'`

* Add `_changeFilter` method to `App` class:

  ```js
  _changeFilter(filter) {
    this.setState(prevState => changeFilter(prevState, filter));
  }
  ```

* Bind `_changeFilter` in the `constructor` of `App` class

* Add an import statement for the `Filter` component

* Add `filter` to destructuring assignment in `render` method of `App` class

* Add a `<Filter filter={filter} onChange={this._changeFilter} />` element to the rendered elements preceding `<TodoList todos={todos} />`

Click a filter option. **Why** doesn’t it affect the todo list?

In the `TodoList.js` file:

* Change the **implicit** return value to a body with an **explicit** return value.

  ```js
  const TodoList = ({filter, onClick, todos}) => {
    return (
      <ul className="list">
        {
          // and so on
        }
      </ul>
    );
  }
  ```

* Add the following assignment before the `return` statement:

  ```js
  const TodoList = ({filter, onClick, todos}) => {
    const todosFiltered = filter === 'all'
      ? todos
      : todos.filter(todo => filter === 'completed'
          ? /* true if todo is completed */
          : /* true if todo is not completed */
        );

    return (
      <ul className="list">
        {
          // and so on
        }
      </ul>
    );
  }
  ```

* Replace the `/* comments */` in the `filter` method with JavaScript expressions.

* Replace something with `todosFiltered` in the `return` statement.

## Challenge 2: Use SVG symbols to improve the interaction

In the `App.js` file:

* Add an import statement for the `Symbols` component.
* Add a `<Symbols />` element to the rendered elements preceding `<Heading todos={todos} />` element.

In the `TodoList.js` file:

* Replace `{text}` in the `li` element with the following.

  ```js
  <svg onClick={() => {onClick(id);}}>
    <use xlinkHref={`#${completed ? 'completed' : 'uncompleted'}`} />
  </svg>
  <div>
    {text}
  </div>
  ```

* Remove the `onClick` prop from the `li` element.

Now you click the symbol to change the completion of a todo item.

Can you think of any problems with the previous design in which you can click anywhere in the item?

## Challenge 3: Add new item

In the `App.js` file:

* Add `addTodo` to the `import` statement from `'./state-reducers'`

* Add `_changeFilter` method to `App` class:

  ```js
  _addTodo(text) {
    this.setState(prevState => addTodo(prevState, text));
  }
  ```

* Bind `_addTodo` in the `constructor` of `App` class

* Add an import statement for the `Adder` component

* Add a `<Adder onSubmit={this._addTodo} />
` element to the rendered elements preceding `</section>`

We need to understand some things in the `Adder.js` file:

* `event.preventDefault()` in the `_onSubmit` method.
* `this._input.value` in the `_onSubmit` method.
* `ref={input => {this._input = input;}}` prop in the `input` element.

## Homework

Read:

* [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)
* [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)
* [Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
* [Forms](https://facebook.github.io/react/docs/forms.html)
* [React Components, Elements, and Instances](https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html)
