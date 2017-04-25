'use strict';

var renderTodos = (function (){
  function renderHeading (state) {
    var uncompleted = state.todos.filter(function (todo) {
      return !todo.completed;
    }).length;
    var total = state.todos.length;

    return $('<h3>Todo list: ' + uncompleted + ' uncompleted / ' + total + ' total</h3>');
  }

  function renderFilter(changeFilterCallback) {
    var name = 'filter';

    return $('<form></form>')
      .attr('name', name)
      .append(
        renderFilterOption(changeFilterCallback, name, 'all', true),
        renderFilterOption(changeFilterCallback, name, 'uncompleted', false),
        renderFilterOption(changeFilterCallback, name, 'completed', false)
      );
  }

  function renderFilterOption(changeFilterCallback, name, value, checked) {
    var $input = $('<input></input>')
      .attr({
        type: 'radio',
        name: name,
        value: value,
      })
      /* For 'change' event, add event listener: changeFilterCallback */;
    if (checked) {
      $input.attr('checked', 'checked');
    }

    return $('<label></label>').text(value).prepend($input);
  }

  function renderList(clickItemCallback, state) {
    return $('<ul class="list"></ul>')
      .append(state.todos.filter(function (todo) {
        return state.visibilityFilter === 'all'
          ? true
          : state.visibilityFilter === 'completed'
            ? todo.completed
            : !todo.completed;
        }).map(function (todo) {
          return $('<li></li>')
            .data('id', todo.id)
            .text(todo.text)
            .toggleClass('completed', todo.completed)
            /* For 'click' event, add event listener: clickItemCallback */;
        }));
  }

  function renderAdder() {
    var $input = $('<input type="text" placeholder="new item"></input>');
    var $button = $('<button>Add</button>');

    return $('<form name="adder"></form>')
      .append($input, $button);
  }

  return function (stateInitial) {
    var state = new State(stateInitial);

    function changeFilterCallback(event) {
      console.log('change filter value', event.target.value);
      state.changeFilter(event.target.value);
      update();
    }

    function clickItemCallback(event) {
      console.log('click item with id', $(event.target).data('id'));
      state.toggleTodo($(event.target).data('id'));
      update();
    }

    var $heading = renderHeading(state);
    var $filter = renderFilter(changeFilterCallback);
    var $list = renderList(clickItemCallback, state);
    var $adder = renderAdder();

    function update() {
      var $headingNext = renderHeading(state);
      $heading.replaceWith($headingNext);
      $heading = $headingNext;

      var $listNext = renderList(clickItemCallback, state);
      $list.replaceWith($listNext);
      $list = $listNext;
    }

    return $('<section class="TodoApp"></section>')
      .append($heading, $filter, $list, $adder);
  };
}());
