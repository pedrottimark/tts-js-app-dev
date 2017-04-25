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
    return todo.id === id;
  });
  if (todo) {
    todo.completed = !todo.completed;
  }
};
