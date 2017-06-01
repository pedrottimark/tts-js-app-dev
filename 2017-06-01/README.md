# Lesson 20: Redux

## Questions to ask about any dependency

Questions from *Articulating Design Decisions* by Tom Greever.

* What problem does this solve?

    Answers from [React Context](https://facebook.github.io/react/docs/context.html)

    > With React, it's easy to track the flow of data through your React components. When you look at a component, you can see which props are being passed, which makes your apps easy to reason about.

    > In some cases, you want to pass data through the component tree without having to pass the props down manually at every level.

    > State management libraries like [Redux](http://redux.js.org) or [MobX](https://mobx.js.org/) and their React bindings are a good choice for managing state that is relevant to many components.

* How does this affect the user?

    Answers from [Redux Read Me](http://redux.js.org/)

    > Redux helps you write applications that behave consistently, run in different environments, and are easy to test.

    > The beauty of this pattern is how well it scales to large and complex apps.

    > It is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.

* Why is it better than the alternative?

    Answers from [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) by Dan Abramov

    > Redux offers a tradeoff. It asks you to:

    > Describe application state as plain objects and arrays.
    > Describe changes in the system as plain objects.
    > Describe the logic for handling changes as pure functions.

    > But if you trade something off, make sure you get something in return.

    > If you’re just learning React, don’t make Redux your first choice. Instead learn to think in React.

## Todo List

### Review of `create-react-app`, part 1

1. Change to the **parent** directory of new app.

2. Create new app: `create-react-app todo-redux`

3. Change to new app directory: `cd todo-redux`

### Review of `create-react-app`, part 2

1. Install additional dependencies: `npm install --save redux react-redux`

2. Open the app directory in an editor.

3. In the `public/index.html` file, change the text in the `title` element to **Todo Redux**

4. Copy files from class repo to new app.

    For example, `cp -R ~/gitrepos/tts-js-app-dev/2017-06-06/src ~/projects/todo-redux`

5. Remove the following files from the `todo-redux/src` directory:

    * `App.css`
    * `App.js`
    * `logo.svg`

6. Create a `__tests__` subdirectory in the `todo-redux/src/components` directory.

7. Move the `App.test.js` file:

    * from the `todo-redux/src` directory
    * to the `todo-redux/src/components/__tests__` directory

8. And then edit the `todo-redux/src/components/__tests__/App.test.js` file:

    * replace `import App from './App';`
    * with `import App from '../App';`

### Overview of Todo Redux

> In Redux, all the application **state** is stored as a single object. It’s a good idea to think of its shape before writing any code. What’s the minimal representation of your app’s state as an object?

See `src/state.js` for the initial state.

> **Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store.

See `src/actions.js` for action creator functions.

> The **reducer** takes the previous state and an action, and returns the next state.

> the reducer must be pure. **Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.**

See `src/reducers/todos.js` for a reducer function.

### store

> The **store** is the object that brings them together. The store has the following responsibilities:

* Holds application state
* Allows access to state via `getState()`
* Allows state to be updated via `dispatch(action)`
* Registers listeners via `subscribe(listener)`
* Handles unregistering of listeners via the function returned by `subscribe(listener)`

> You’ll only have a **single store** in a Redux application.

> When you want to split your data handling logic, you'll use **reducer composition** instead of many stores.

1. Replace in `src/index.js`

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';
    import './index.css';

    import {createStore} from 'redux';
    import {Provider} from 'react-redux';
    import reducer from './reducers';
    import state from './state';

    const store = createStore(reducer, state);

    ReactDOM.render((
        <Provider store={store}>
          <App />
        </Provider
      ),
      document.getElementById('root')
    );
    ```

2. Replace `src/components/__tests__/App.test.js` with

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from '../App';

    import {createStore} from 'redux';
    import {Provider} from 'react-redux';
    import reducer from '../../reducers';
    import state from '../../state';

    it('renders without crashing', () => {
      const store = createStore(reducer, state);
      const div = document.createElement('div');
      ReactDOM.render((
        <Provider store={store}>
          <App />
        </Provider>),
        div
      );
    });
    ```

3. `src/components/App.js`

    * Delete `import state from '../state';`
    * Delete the `constructor` method
    * In `render` method, replace `this.state` with `this.props`
    * Add `import {connect} from 'react-redux';`
    * Replace `export default App;` with the following:

        ```js
        // A container component subscribes to relevant parts of state in the Redux store.
        const mapStateToProps = ({filter, todos}) => ({
          filter,
          todos,
        });

        const mapDispatchToProps = {
        };

        export default connect(mapStateToProps, mapDispatchToProps)(App);
        ```

4. See `combineReducers` in `src/reducers/index.js`

5. See the two tests in `src/reducers/__tests__/index.test.js`

## Challenge 1 together: handle `toggleTodo` event

Add to `App.js`

1. Import the action creator function

    ```js
    import {
      toggleTodo,
    } from '../actions';
    ```

2. Add the action creator function to `mapDispatchToProps`

    ```js
    const mapDispatchToProps = {
      toggleTodo,
    };
    ```

3. Call the action creator function in the callback method:

    ```js
    _toggleTodo = (id) => {
      this.props.toggleTodo(id);
    }
    ```

## Challenge 2 in teams: handle `changeFilter` event

Add to `App.js`

1. Import the action creator function
2. Add the action creator function to `mapDispatchToProps`
3. Call the action creator function in the callback method:

## Challenge 3 in teams: handle `addTodo` event

Add to `App.js`

1. Import the action creator function
2. Add the action creator function to `mapDispatchToProps`
3. Call the action creator function in the callback method:

## Challenge 4 together: replace action object with action creator function

In `src/reducers/__tests__todos.test.js`

1. Import the `addTodo` and `toggleTodo` action creator functions:

    ```js
    import {
      addTodo,
      toggleTodo,
    } from '../../actions';
    ```

2. Find in the `adds an item to an empty array` test:

    ```js
    const next = reducer(prev, {
      type: 'ADD_TODO',
      text,
    });
    ```

3. Replace the action object with an action creator function:

    ```js
    const next = reducer(prev, addTodo(text));
    ```

4. Find in the `toggles an item from uncompleted to completed` test:

    ```js
    const next = reducer(prev, {
      type: 'TOGGLE_TODO',
      id,
    });
    ```

5. Replace the action object with an action creator function:

    ```js
    const next = reducer(prev, toggleTodo(id));
    ```

## Challenge 5 in teams: Add tests with an action creator function:

In `src/reducers/__tests__todos.test.js` replace comments with tests:

* write a test that adds an item to a non-empty array

* write a test that toggles an item from completed to uncompleted

## Challenge 6 together: Add snapshot tests for `TodoList` component

1. `npm install --save-dev react-test-renderer`

2. Create a `TodoList.test.js` file in the `src/components/__test__` directory:

    ```js
    import React from 'react';
    import renderer from 'react-test-renderer';

    import TodoList from '../TodoList';
    import state from '../../state';

    const onClick = () => {}; // placeholder for callback function

    describe('TodoList', () => {
      it('renders empty todo list', () => {
        expect(renderer.create(
          <TodoList filter="all" todos={[]} onClick={onClick} />
        ).toJSON()).toMatchSnapshot();
      });
      it('renders initial state', () => {
        expect(renderer.create(
          <TodoList {...state} onClick={onClick} />
        ).toJSON()).toMatchSnapshot();
      });
    });
    ```

3. If tests are not already running, `npm test`

4. Notice what Jest does:

    * Outputs on the console: `2 snapshots written in 1 test suite.`
    * Creates `__snapshots__` subdirectory in `src/components/__tests__` directory
    * Creates `TodoList.test.js.snap` file in `__snapshots__` subdirectory
    * Adds 2 `exports` which consist of what the component renders

## Inspiration

* [ReactJS Charlotte](https://www.meetup.com/ReactJS-Charlotte/)
* [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux) 30 free lessons in 121 minutes = 4 minute average
* [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) 27 free lessons in 137 minutes = 5 minute average
