var invariant = require('invariant');

var State = require('./state');

describe('todos', function () {
  var todo0 = {
    id: 0,
    text: 'Write less, do more',
    completed: true,
  };
  var todo1 = {
    id: 1,
    text: 'Find something',
    completed: false,
  };
  var todo2 = {
    id: 2,
    text: 'Do something',
    completed: false,
  };

  it('adds an item to an empty list', function () {
    var state = new State({
      todos: [],
    });
    var text = 'Write a test';
    state.addTodo(text);

    expect(state.todos).toEqual([
      {
        id: 0,
        text: text,
        completed: false,
      }
    ]);
  });
/*
  it('toggles an uncompleted todo', function () {
    var state = new State({
      todos: [todo0, todo1, todo2]
    });
    state.toggleTodo(todo1.id);
  });
*/

/*
  it('toggles a completed todo', function () {
    var state = new State({
      todos: [todo0, todo1, todo2]
    });
    state.toggleTodo(todo0.id);
  });
});
*/
