# Lesson 2: Data Structures

## Analogies

If you think of text nodes in HTML as an analogy to primary types in JavaScript, then markup structures like lists or tables in HTML are an analogy to data structures like arrays or objects in JavaScript.

### HTML list to JavaScript array

```html
<h2>Teachers</h2>

<ol>
  <li>Assaf</li>
  <li>Shane</li>
</ol>

<ul>
  <li>Assaf</li>
  <li>Shane</li>
</ul>
```

Just as a list in HTML consists of items in an order, whether or not the order is significant, so also for an array in JavaScript.

```js
var teachers = ['Assaf', 'Shane'];
```

### HTML table to JavaScript array of objects

```html
<table>
  <caption>course students and their computers</caption>
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">OS</th>
      <th scope="col">type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Steve</th>
      <td>Linux</td>
      <td>laptop</td>
    </tr>
    <tr>
      <th scope="row">Katy</th>
      <td>OSX</td>
      <td>macbook</td>
    </tr>
    <tr>
      <th scope="row">Chuck</th>
      <td>OSX</td>
      <td>macbook</td>
    </tr>
  </tbody>
</table>
```

```js
var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: [
    'Assaf',
    'Shane',
  ],
  students: [
    {
      name: 'Steve',
      computer: {
        OS: 'Linux',
        type: 'laptop',
      },
    },
    {
      name: 'Katy',
      computer: {
        OS: 'OSX',
        type: 'macbook',
      },
    },
    {
      name: 'Chuck',
      computer: {
        OS: 'OSX',
        type: 'macbook',
      },
    },
  ],
};
```

### CSS style to JavaScript object

An even closer analogy is style properties in CSS:

```css
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
```

For which some developers use style objects in React:

```js
var style = {
  borderCollapse: 'collapse',
  borderSpacing: 0,
  width: '100%',
}
```

## Links

### For previous and current lesson

* [Grammar and types at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
* [Array at Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JSON Introduction at w3schools.com](https://www.w3schools.com/js/js_json_intro.asp)

### For your future on-the-job learning

* [Learn ES2015 at babeljs.io](https://babeljs.io/learn-es2015/)
* [Understanding ECMAScript 6 at leanpub.com](https://leanpub.com/understandinges6)
* [JavaScript books by Dr. Axel Rauschmayer](http://exploringjs.com/)
