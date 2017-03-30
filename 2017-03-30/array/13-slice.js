var array = ['zero', 'one', 'two', 'three'];

console.log('array before slice:', array);

// from the start index
// to (but not including) the end index
// if omitted, the end index is the array length
// number of sliced items is end - start
var sliced = array.slice(1, 3);

console.log('array.slice(1, 3): ', sliced);
console.log('array after slice: ', array);