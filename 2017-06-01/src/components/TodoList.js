import React from 'react';

const todosFiltered = (filter, todos) => filter === 'all'
  ? todos
  : todos.filter(({completed}) => filter === 'completed'
    ? completed
    : !completed
  );

const TodoList = ({filter, onClick, todos}) => (
  <ul className="list">
    {
      todosFiltered(filter, todos).map(({completed, id, text}) => (
        <li key={id} className={completed ? 'completed' : 'uncompleted'} onClick={() => {onClick(id);}}>
          <svg>
            <use xlinkHref={`#${completed ? 'completed' : 'uncompleted'}`} />
          </svg>
          <div>
            {text}
          </div>
        </li>
      ))
    }
  </ul>
);

export default TodoList;
