# Lesson 9: jQuery

> Write less, do more.
> Find something, do something.

```js
// Find the root element, and then set its text.
jQuery('#root').text('Hello, jQuery!');
```

1. [Download](http://jquery.com/download/) the file from the first jQuery 3.2.1 link to this `2017-04-25` directory.
2. Rename the file as `jquery.js` to omit the version number.
3. Open `01-hello-jquery.html` in a Web browser.

## jQuery object

The `jQuery` or `$` function is a virtual constructor.

* `$(selectorString)` finds elements: `$('#root')` or `$('li')` or `$('.completed')`
* `$(markupString)` creates elements: `$('<li></li>')` or `$('<input type="text"/>')`
* `$(element)` wraps a DOM element: `$(event.target)` or `$(this)`

It returns an [array-like object](https://learn.jquery.com/using-jquery-core/jquery-object/) to **wrap** a collection of DOM elements:

* has `length` property
* refers to items by non-negative integer index
* has an `each` method and you can use function `call` method with jQuery object as context to call any array method
* has an intuitive [API](http://api.jquery.com/) of methods:
  * [manipulation](http://api.jquery.com/category/manipulation/)
  * [events](http://api.jquery.com/category/events/)
  * [traversing](http://api.jquery.com/category/traversing/)

## Selectors: find something

Most of the [selectors](http://api.jquery.com/category/selectors/) are from CSS.

Because a collection can contain zero, one, or more elements, you don’t need to choose which function to call as you do with [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector) and [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) functions.

I usually precede variable names with `$` to distinguish jQuery objects from `HTMLCollection` or `NodeList` objects.

```js
var $itemsInDocument = $('li');

var $itemsInTodoList = $('#todos li'); // or $('#todos').find('li')
```

## Manipulation: do something

Many jQuery methods return the object to support the chaining pattern. For some methods, a “get” call returns a value and a “set” call returns the object.

* [text](http://api.jquery.com/text/)
  * get the text content: `var text = jQuery('#root').text();`
  * set the text content: `jQuery('#root').text('Hello, jQuery!');`

* [class attribute](http://api.jquery.com/category/manipulation/class-attribute/)
  * [hasClass](http://api.jquery.com/hasClass/) `$item.hasClass('completed'))`
  * [addClass](http://api.jquery.com/addClass/) `$items.addClass('completed')`
  * [removeClass](http://api.jquery.com/removeClass/) `$items.removeClass('completed')`
  * [toggleClass](http://api.jquery.com/toggleClass/) `$item.toggleClass('completed', completed);`

* [attr](http://api.jquery.com/attr/)

  * get the value of an attribute: `var name = $input.attr('name');`
  * set the value of an attribute: `$input.attr('name', name);`
  * set multiple attributes: `$input.attr({type: 'radio', name: name, value: value});`

* [append](http://api.jquery.com/append/) arguments to the end of each element in the collection

  ```js
  function renderFilter() {
    var name = 'filter';

    return $('<form name=></form>')
      .attr('name', name)
      .append(
        renderFilterOption(name, 'all', true),
        renderFilterOption(name, 'uncompleted', false),
        renderFilterOption(name, 'completed', false)
      );
  }
  ```

* [prepend](http://api.jquery.com/prepend/) arguments to the beginning of each element in the collection

  ```js
  function renderFilterOption(name, value, checked) {
    var $input = …;

    return $('<label></label>').text(value).prepend($input);
  }
  ```

## Events

jQuery normalizes the [event object](http://api.jquery.com/category/events/event-object/) according to W3C standards.

* [on](http://api.jquery.com/on/) is similar to the `addEventListener` method

* [data](http://api.jquery.com/data/) on elements is similar to [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) as an alternative to binding callback functions
  * get value of data: `var value = $li.data('id')`
  * set value of data: `$li.data('id', value);`

```js
var state = new State({
  todos: [
    {
      id: 0,
      text: 'Write less, do more',
      completed: true,
    },
    // …
  ],
});

// …
    state.todos.map(function (todo) {
      return $('<li></li>')
        .data('id', todo.id)
        .text(todo.text)
        .toggleClass('completed', todo.completed)
        .on('click', clickItemCallback);
    });
// …

function clickItemCallback(event) {
  state.toggleTodo($(event.target).data('id'));
  update();
}
```

## Challenge 1

Find all `/* comments */` and replace with jQuery methods to render the application from data.

## Challenge 2

Find all `/* comments */` and replace with jQuery methods to make the application interact:

* Click an item to “toggle” it between uncompleted and completed states.
* Click a filter option to display all, uncompleted, or completed items.

The following `update` function:

* Maximizes correctness and minimizes efficiency: after any interaction which changes the state of the application, it **replaces everything** in the user interface which might change.
* Is not the usual way to update the interface in a DOM or jQuery application.
* Is an oversimplified version of the way that React updates the interface, except that React maximizes correctness and efficiency **doesn’t replace** any elements, attributes, and text that didn’t change.

```js
function update() {
  var $headingNext = renderHeading(state);
  $heading.replaceWith($headingNext);
  $heading = $headingNext;

  var $listNext = renderList(clickItemCallback, state);
  $list.replaceWith($listNext);
  $list = $listNext;
}
```

[replaceWith](http://api.jquery.com/replaceWith/) Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.

## Challenge 3

Find all `/* comments */` and replace with jQuery methods to make the application interact:

* Type the text of a new item in the box, and then click Add.

## Challenge 4

To lean toward JSX notation in React, here is a similar ECMAScript 2015 feature: **template literals**.

* enclosed in backticks
* can contain single or double quote marks
* can contain multiple lines
* can contain substitutions: any valid JavaScript expression enclosed in `${}`

You can replace some jQuery methods:

```js
var name = 'filter';
var $form $('<form></form>').attr('name', name);
```

with template literals:

```js
var name = 'filter';
var $form = $(`<form name="${name}"></form>`);
```

Find all `/* comments */` and replace jQuery methods with template literals.

## Homework

Read:

* [How jQuery Works](https://learn.jquery.com/about-jquery/how-jquery-works/)
* [The jQuery Object](https://learn.jquery.com/using-jquery-core/jquery-object/)
* [$( document ).ready()](https://learn.jquery.com/using-jquery-core/document-ready/)

To prepare for the next class, read a page about [Ajax](https://learn.jquery.com/ajax/) which has 5 links to child pages.

Read at least 3 other pages of your choice from [jQuery Learning Center](https://learn.jquery.com/)
