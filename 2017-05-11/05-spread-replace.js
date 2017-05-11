// Given previous state and id of item to toggle,
// return next state.
const toggleTodo = (todos, id) => {
  const index = todos.findIndex(todo => todo.id === id);
  return index === -1
    ? todos
    : [
        ...todos.slice(0, index),
        Object.assign({}, todos[index], {
          completed: !todos[index].completed,
        }),
        ...todos.slice(index + 1)
      ];
};

const todosPrev = [
  {
    id: 0,
    text: 'Write less, do more',
    completed: true,
  },
  {
    id: 1,
    text: 'Find something',
    completed: false,
  },
  {
    id: 2,
    text: 'Do something',
    completed: false,
  },
];
const todosNext = toggleTodo(todosPrev, 1);

console.log(todosNext);
