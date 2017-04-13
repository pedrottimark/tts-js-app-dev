'use strict';

// Return object with methods which implement “business logic” for landscape.
// additions object is required
// items array is optional
function landscapeLogic(dataInitial) {
  var additions = Object.assign({}, dataInitial.additions); // idiom to copy object
  var items = Array.isArray(dataInitial.items)
    ? dataInitial.items.slice() // idiom to copy array
    : [];

  return {
    add: function (key) {
      items.push(additions[key]);
    },
    getString: function () {
      console.log('items:   ', items);
      return items.join(' ');
    }
  };
}

var additions = {
  land: '\u2013', // EN DASH
  tree: '^',
  water: '~',
};
var landscape = landscapeLogic({additions: additions});

landscape.add('land');
landscape.add('tree');
landscape.add('water');
console.log('getString:', landscape.getString());

additions.rock = '.';
landscape.add('rock');
console.log('getString:', landscape.getString());
