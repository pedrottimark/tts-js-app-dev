var teachers = ['Assaf', 'Shane'];
console.log('array before assignment:', teachers);

teachers[4] = 'Cam Newton';
console.log('array after assignment: ', teachers)
console.log('array length:           ', teachers.length);
console.log('item types:             ',
  typeof teachers[0],
  typeof teachers[1],
  typeof teachers[2],
  typeof teachers[3],
  typeof teachers[4]
);