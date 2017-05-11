const React = require('react');
const ReactDOMServer = require('react-dom/server');

const data = {
  visibilityFilter: 'all',
  todos: [
    {
      id: 0,
      text: 'Write less, do more',
      completed: true,
    },
    {
      id: 1,
      text: 'Find something',
      completed: false,
    },
    {
      id: 2,
      text: 'Do something',
      completed: false,
    },
  ],
};

const items = data.todos.map(todo => React.createElement('li', {
  key: todo.id,
  style: {
    color: todo.completed ? 'black' : 'green',
    textDecoration: todo.completed ? 'line-through' : 'none',
  },
}, todo.text));

const list = React.createElement('ul', null, ...items);

process.stdout.write(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'/>
<title>07-spread-createElement</title>
</head>
<body>
<div id="root">
${ReactDOMServer.renderToStaticMarkup(list)}
</div>
</body>
</html>`);
