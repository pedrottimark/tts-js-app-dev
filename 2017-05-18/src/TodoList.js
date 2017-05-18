import React from 'react';

/*
  In the `li` element, add a `className` prop whose value is
  a ternary expression whose condition is `completed`
  and whose then and else values are `'completed'` and `'uncompleted'`
*/

const TodoList = ({todos}) => (
  <ul className="list">
    {
      todos.map(({completed, id, text}) => (
        <li key={id}>
          {text}
        </li>
      ))
    }
  </ul>
);

export default TodoList;
