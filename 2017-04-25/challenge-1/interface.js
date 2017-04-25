'use strict';

var renderTodos = (function (){
  function renderHeading (state) {
    var uncompleted = state.todos.filter(function (todo) {
      return !todo.completed;
    }).length;
    var total = state.todos.length;

    return $('<h3>Todo list: ' + uncompleted + ' uncompleted / ' + total + ' total</h3>');
  }

  function renderFilter() {
    var name = 'filter';

    return $('<form></form>')
      .attr('name', name)
      .append(
        renderFilterOption(name, 'all', true),
        renderFilterOption(name, 'uncompleted', false),
        renderFilterOption(name, 'completed', false)
      );
  }

  function renderFilterOption(name, value, checked) {
    var $input = $(/* input element */)
      /* has the following attributes:
        type: 'radio',
        name: name,
        value: value,
      */;
    if (checked) {
      $input.attr('checked', 'checked');
    }

    return $(/* label element */).text(value).prepend($input);
  }

  function renderList(state) {
    return $(/* unordered list element with class="list" */)
      .append(state.todos.map(function (todo) {
        return $(/* list item element */)
          /* has the following text: todo.text */
          .toggleClass('completed', todo.completed);
      }));
  }

  function renderAdder() {
    var $input = $(/* input element has type="text" and placeholder="new item" */);
    var $button = $(/* button element has text: Add */);

    return $('<form name="adder"></form>')
      .append($input, $button);
  }

  return function (stateInitial) {
    var state = new State(stateInitial);

    var $heading = renderHeading(state);
    var $filter = renderFilter();
    var $list = renderList(state);
    var $adder = renderAdder();

    return $('<section class="TodoApp"></section>')
      .append($heading, $filter, $list, $adder);
  };
}());
