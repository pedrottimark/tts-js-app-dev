/* eslint-env browser, jquery */

'use strict';

const ReactDOMServer = require('react-dom/server');
var renderTodos = require('./interface');

const renderedTodos = renderTodos({
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
});

process.stdout.write(`<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'/>
<title>04-challenge</title>
</head>
<body>
<div id="root">
${ReactDOMServer.renderToStaticMarkup(renderedTodos)}
</div>
</body>
</html>`);
