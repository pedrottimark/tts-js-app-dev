'use strict';

// Return object with methods which implement “business logic” for landscape.
// itemsInitial array is optional
function landscapeLogic(itemsInitial) {
  var items = itemsInitial || [];

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
