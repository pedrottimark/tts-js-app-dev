// Given state, return a number that is greater than id of any item.
// A very naive (and pure) algorithm to get a unique number identifier.
const idNext = (todos) => todos.reduce((id, todo) =>
  id <= todo.id
    ? todo.id + 1 // greater than id of current item
    : id, // is greater than id of any item so far
  0);

export default (todos = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      // Array spread operator
      return [
        ...todos,
        {
          id: idNext(todos),
          text: action.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return todos.map(todo => todo.id === action.id
        // Object spread operator is a Stage 3 proposal for ECMAScript.
        // Available in Node 8 with --harmony_object_rest_spread option.
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
      );
    default:
      return todos;
  }
};
