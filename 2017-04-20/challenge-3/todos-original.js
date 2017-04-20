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

function addTodo(text) {
  var todo = /* an object which has text property and completed property false */;
  state.todos.push(todo); // mutate the state

  return todo; // support chaining pattern
}

// Given todo object, return same object
// with opposite value of completed property.
function toggleTodo(todo) {
  todo.completed = !todo.completed;

  return todo; // support chaining pattern
}

var filterId = 'filter';
var countId = 'count';
var todosId = 'todos';
var addId = 'add';

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

function renderFilter(filterId) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', filterId);

  ul.appendChild(renderRadio(filterId, 'all', true));
  ul.appendChild(renderRadio(filterId, 'uncompleted', false));
  ul.appendChild(renderRadio(filterId, 'completed', false));

  return ul;
}

function renderRadio(name, value, checked) {
  var input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', name);
  input.setAttribute('value', value);
  input.setAttribute('id', value);
  if (checked) {
    input.setAttribute('checked', 'checked');
  }

  var label =  document.createElement('label');
  label.setAttribute('for', value);
  label.innerHTML = value;

  var li = document.createElement('li');
  li.appendChild(input);
  li.appendChild(label);

  return li;
}

function renderAdd(addId) {
  var div = /* create the element */;
  div.setAttribute('id', addId);

  var input = /* create the element */;
  input.setAttribute('type', 'text');

  var button = /* create the element */;
  button.innerHTML = 'Add';

  /* append the input to the div */
  /* append the button to the div */

  return div;
}

var section = document.createElement('section');
section.appendChild(renderHeading());
section.appendChild(renderFilter(filterId));
section.appendChild(renderList(state.todos));
section.appendChild(renderAdd(addId));

var root = document.getElementById('root');
root.appendChild(section);

var count = document.getElementById(countId);
var filter = document.getElementById(filterId);
var todos = document.getElementById(todosId);
var itemsUncompleted = todos.getElementsByClassName('uncompleted');

function update() {
  count.innerHTML = itemsUncompleted.length;
}

update(); // initialize

function onChangeFilterItem(event) {
  var value = setFilter(event.target.value);
  todos.className = value === 'uncompleted' || value === 'completed'
    ? value
    : '';
}

Array.prototype.forEach.call(filter.querySelectorAll('input'), function (input) {
  input.addEventListener('change', onChangeFilterItem);
});

function onClickTodoItem(i, event) {
  updateItemElementFromObject(event.currentarget, toggleTodo(state.todos[i])); // update the item
  update(); // update the count
}

Array.prototype.forEach.call(todos.querySelectorAll('li'), function (li, i) {
  li.addEventListener('click', onClickTodoItem.bind(null, i));
});

function addItem() {
  var input = document.querySelector('#' + addId + ' input');
  var todo = addTodo(input.value);
  var li = /* create the element */;
  updateItemElementFromObject(li, todo);
  /* add event listener to li and bind it to the correct argument value */
  /* append li to todos in the DOM */
  /* assign the value property of the input element to empty string */
}

var buttonAdd = document.querySelector('#' + addId + ' button').addEventListener('click', addItem);
