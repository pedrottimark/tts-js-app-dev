'use strict';

// Return object with methods which implement “business logic” for landscape.
// itemsInitial array is optional
function landscapeLogic(itemsInitial) {
  // A ternary condition expression is similar to an if-else statement.
  var items = Array.isArray(itemsInitial) // condition
    ? itemsInitial.slice() // value if condition is truthy
    : []; // value if condition is falsey

  return {
    add: function (item) {
      items.push(item);
    },
    getString: function () {
      return items.join(' ');
    }
  };
}

var array = ['Hello'];
console.log('array             ', array);

var object = landscapeLogic(array);

object.add('object');
console.log('array             ', array);
console.log('object.getString()', object.getString());

array[1] = 'array';
console.log('array             ', array);
console.log('object.getString()', object.getString());
