var array = ['zero', 'one', 'two', 'three'];

console.log('array before splice:', array);

// from the start index
// remove a number of items
// optionally add some items
var removed = array.splice(1, 2, 'a', 'b', 'c');

console.log('removed items:      ', removed);
console.log('array after splice: ', array);