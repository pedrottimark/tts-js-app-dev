'use strict';

function State(state) {
  this.visibilityFilter = state.visibilityFilter;
  this.todos = state.todos.map(function (todo) {
    return Object.assign({}, todo);
  });
}
