var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane']
};

var stringified = JSON.stringify(course);
var parsed = JSON.parse(stringified);
console.log('original object:   ', course);
console.log('stringified object:', stringified);
console.log('parsed object:     ', parsed);