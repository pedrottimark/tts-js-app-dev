var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane']
};

console.log('course.name', course.name);

// The normalized example illustrates a realistic situation
// when you need to refer to property with bracket notation.
var key = 'name';
console.log('course[key]', course[key]);