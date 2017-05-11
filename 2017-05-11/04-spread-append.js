// Given the previous state and the text to add,
// return the next state.
const addTodo = (todos, text) => [...todos, {
  text: text,
  completed: false,
}];

const todos0 = [];
const todos1 = addTodo(todos0, 'Write less, do more');
const todos2 = addTodo(todos1, 'Find something');
const todos3 = addTodo(todos2, 'Do something');

console.log(todos0);
console.log(todos1);
console.log(todos2);
console.log(todos3);
