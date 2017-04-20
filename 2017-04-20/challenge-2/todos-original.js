var state = {
  visibilityFilter: 'all',
  todos: [
    {
      text: 'Find elements',
      completed: true,
    },
    {
      text: 'Attach listeners',
      completed: false,
    },
    {
      text: 'Do things',
      completed: false,
    },
  ],
};

function setFilter(value) {
  state.visibilityFilter = value;
  return value; // support chaining pattern
}

function toggleTodo(todo) {
  /* assign to completed property of todo the opposite boolean value */

  return todo; // support chaining pattern
}

var filterId = 'filter';
var countId = 'count';
var todosId = 'todos';

function renderList(todos) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', todosId);

  todos.forEach(function (todo) {
    var li = document.createElement('li');
    updateItemElementFromObject(li, todo);
    ul.appendChild(li);
  });

  return ul;
}

function updateItemElementFromObject(li, todo) {
  li.innerHTML = todo.text;
  li.setAttribute('class', todo.completed
    ? 'completed'
    : 'uncompleted'
  );
}

function renderHeading () {
  var h3 = document.createElement('h3');

  var span1 = document.createElement('span');
  span1.innerHTML = 'Todo list: ';
  h3.appendChild(span1);

  var span2 = document.createElement('span');
  span2.setAttribute('id', countId);
  h3.appendChild(span2);

  var span3 = document.createElement('span');
  span3.innerHTML = ' uncompleted';
  h3.appendChild(span3);

  return h3;
}

function renderFilter(name) {
  var ul = /* create the element */;
  ul.setAttribute('id', name);

  ul.appendChild(renderRadio(name, 'all', true));
  ul.appendChild(renderRadio(name, 'uncompleted', false));
  ul.appendChild(renderRadio(name, 'completed', false));

  return ul;
}

function renderRadio(name, value, checked) {
  var input = /* create the element */;
  input.setAttribute('type', 'radio');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  input.setAttribute('id', value);
  if (checked) {
    input.setAttribute('checked', 'checked');
  }

  var label =  /* create the element */;
  label.setAttribute('for', value);
  label.innerHTML = value;

  var li = /* create the element */;
  li.appendChild(input);
  li.appendChild(label);

  return li;
}

var section = document.createElement('section');
section.appendChild(renderHeading());
section.appendChild(renderFilter(filterId));
section.appendChild(renderList(state.todos));

var root = document.getElementById('root');
root.appendChild(section);

var filter = document.getElementById(filterId);
var count = document.getElementById(countId);
var todos = document.getElementById(todosId);
var itemsUncompleted = todos.getElementsByClassName('uncompleted');

function update() {
  count.innerHTML = itemsUncompleted.length;
}

update(); // initialize

function onChangeFilterItem(event) {
  var value = setFilter(event.target.value);
  /* if value is 'uncompleted' or 'completed' then assign value to todos.className */
  /* otherwise assign empty string to todos.className */
}

Array.prototype.forEach.call(filter.querySelectorAll('input'), function (input) {
  input.addEventListener('change', onChangeFilterItem);
});

function onClickTodoItem(i, event) {
  updateItemElementFromObject(event.currentTarget, toggleTodo(state.todos[i])); // update the item
  update(); // update the count
}

Array.prototype.forEach.call(todos.querySelectorAll('li'), function (li, i) {
  li.addEventListener('click', /* bind callback with null as context and i as argument*/);
});
