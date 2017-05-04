'use strict';

// https://learn.jquery.com/about-jquery/how-jquery-works/#launching-code-on-document-ready
$(document).ready(function () {
  $('#root').append(renderTodos({
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
  }));
});
