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

var countId = 'count';
var todosId = 'todos';

function renderList(todos) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', todosId);

  todos.forEach(function (todo) {
    var li = /* create the element */;
    updateItemElementFromObject(li, todo);
    /* append li to ul */;
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
  var h3 = /* create the element */;

  var span1 = /* create the element */;
  span1.innerHTML = /* assign text of first span */;
  h3.appendChild(span1);

  var span2 = /* create the element */;
  span2.setAttribute('id', /* value */);
  h3.appendChild(span2);

  var span3 = /* create the element */;
  span3.innerHTML = /* assign text of last span */;
  h3.appendChild(span3);

  return h3;
}

var section = /* create the element */;
section.appendChild(renderHeading());
/* append ul to fragment */;

var root = document.getElementById('root');
root.appendChild(section);

var count = document.getElementById(countId);
var todos = document.getElementById(todosId);
var itemsUncompleted = todos.getElementsByClassName('uncompleted');

function update() {
  count.innerHTML = itemsUncompleted.length;
}

update(); // initialize
