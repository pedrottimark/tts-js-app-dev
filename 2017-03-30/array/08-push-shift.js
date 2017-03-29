var teachers = [];
console.log('array before push: ', teachers);

teachers.push('Assaf'); // first in
console.log('array after push 1:', teachers);

teachers.push('Shane');
console.log('array after push 2:', teachers);

var shifted = teachers.shift(); // first out
console.log('shifted item:      ', shifted);
console.log('array after shift: ', teachers);