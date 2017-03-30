var teachers = ['Assaf', 'Shane', 'Zack'];

console.log('array:               ', teachers);

teachers.forEach(function(item, index) {
  console.log('array item and index:', item, index);
});

teachers.forEach(function(item) {
  console.log('array item:          ', item);
});