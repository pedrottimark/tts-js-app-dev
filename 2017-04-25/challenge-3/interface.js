'use strict';

var renderTodos = (function (){
  function renderHeading (state) {
    var uncompleted = state.todos.filter(function (todo) {uncompleted
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
      .on('change', function (event) {
        /*
          To encapsulate details about the interface, call
          changeFilterCallback with argument: event.target.value
        */;
      });
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
            .on('click', function (event) {
              clickItemCallback($(event.target).data('id'));
            });
        }));
  }

  function renderAdder(addItemCallback) {
    var name = 'added';
    var $input = $('<input type="text" placeholder="new item"></input>')
      /* has the following attribute: 'name', name */;
    var $button = $('<button type="submit">Add</button>');

    return $('<form name="adder"></form>')
      .on('submit', function (event) {
        // http://api.jquery.com/event.preventDefault/
        event.preventDefault(); // comment out this line to see why you need it :(
        // https://www.w3.org/TR/html5/forms.html#the-form-element
        // form[name] returns the form control with the given id or name.
        var input = event.target[name];
        var value = input.value;
        input.value = '';
        /*
          To encapsulate details about the interface, call
          addItemCallback with argument: value
        */
      })
      .append($input, $button);
  }

  return function (stateInitial) {
    var state = new State(stateInitial);

    function changeFilterCallback(value) {
      state.changeFilter(value);
      update();
    }

    function clickItemCallback(id) {
      state.toggleTodo(id);
      update();
    }

    function addItemCallback(text) {
      state.addTodo(text);
      update();
    }

    var $heading = renderHeading(state);
    var $filter = renderFilter(changeFilterCallback);
    var $list = renderList(clickItemCallback, state);
    var $adder = renderAdder(addItemCallback);

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
