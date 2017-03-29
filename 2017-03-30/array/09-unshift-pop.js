var teachers = [];
console.log('array before unshift: ', teachers);

teachers.unshift('Assaf'); // first in
console.log('array after unshift 1:', teachers);

teachers.unshift('Shane');
console.log('array after unshift 2:', teachers);

var popped = teachers.pop(); // first out
console.log('popped item:          ', popped);
console.log('array after pop:      ', teachers);
