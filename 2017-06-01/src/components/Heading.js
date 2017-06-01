import React from 'react';

/*
  Replace the callback comment in `filter` method with an arrow function
  whose input argument is `todo`
  whose output value is an expression that is true when the item is uncompleted.
*/

/*
  Rewrite the callback function
  with object destructuring as the input argument instead of `todo`
  and simplify the output value
*/

const uncompleted = todos => todos.filter(({completed}) => !completed).length;
const total = todos => todos.length;

const Heading = ({todos}) => (
  <header>
    <h1>
      <span>Todo list: </span>
      <strong>{`${uncompleted(todos)} uncompleted`}</strong>
      <span>{` / ${total(todos)} total`}</span>
    </h1>
  </header>
);

export default Heading;
