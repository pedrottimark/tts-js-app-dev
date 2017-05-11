'use strict';

class State {
  constructor(state) {
    this.visibilityFilter = state.visibilityFilter;
    this.todos = state.todos.map(function (todo) {
      return Object.assign({}, todo);
    });
  }

  changeFilter(value) {
    this.visibilityFilter = value;
  }

  toggleTodo(id) {
    var todo = this.todos.find(function (todo) {
      return todo.id === id;
    });
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  addTodo(text) {
    // A very naive (and pure) algorithm to get a unique number identifier.
    var id = this.todos.reduce(function (aggregate, item) {
      return aggregate <= item.id
        ? item.id + 1 // greater than id of current item
        : aggregate; // is greater than id of any item so far
    }, 0); // is greater than id of any item

    /* Rewrite the following object literal using shortcut for `id` and `text` */
    this.todos.push({
      id: id,
      text: text,
      completed: false,
    });
  }
}

module.exports = State;
