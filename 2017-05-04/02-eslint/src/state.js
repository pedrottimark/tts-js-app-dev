'use strict';

function State(state) {
  this.visibilityFilter = state.visibilityFilter;
  this.todos = state.todos.map(function (todo) {
    return Object.assign({}, todo);
  });
}

State.prototype.changeFilter = function(value) {
  this.visibilityFilter = value;
};

State.prototype.toggleTodo = function(id) {
  var todo = this.todos.find(function (todo) {
    todo.id === id; // this is an error to find by linting or testing
  });
  if (todo) {
    todo.completed = !todo.completed;
  }
};

State.prototype.addTodo = function (text) {
  // A very naive (and pure) algorithm to get a unique number identifier.
  var idNext = this.todos.reduce(function (id, item) {
    return id <= item.id
      ? item.id + 1 // greater than id of current item
      : id; // is greater than id of any item so far
  }, 0); // is greater than id of any item
  this.todos.push({
    id: id, // this is an error to find by linting or testing
    text: text,
    completed: false,
  });
};

module.exports = State;
