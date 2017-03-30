var teachers = ['Assaf', 'Shane'];

console.log('array before push:          ', teachers);

var pushed = teachers.push('Zack');

console.log('push returns the new length:', pushed);
console.log('same as new length property:', teachers.length);
console.log('array after push:           ', teachers);