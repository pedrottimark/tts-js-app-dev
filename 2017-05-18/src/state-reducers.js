// Given state, return a number that is greater than id of any item.
// A very naive (and pure) algorithm to get a unique number identifier.
const idNext = (state) => state.todos.reduce((id, todo) =>
  id <= todo.id
    ? todo.id + 1 // greater than id of current item
    : id, // is greater than id of any item so far
  0);

export const addTodo = (state, text) => Object.assign({}, state, {
  todos: [...state.todos, {
    id: idNext(state),
    text,
    completed: false,
  }],
});

export const toggleTodo = (state, id) => Object.assign({}, state, {
  todos: state.todos.map(todo => todo.id === id
    ? Object.assign({}, todo, {
        completed: !todo.completed,
      })
    : todo
  ),
});

export const changeFilter = (state, filter) => Object.assign({}, state, {
  filter,
});
