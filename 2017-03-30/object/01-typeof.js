var teachers = ['Assaf', 'Shane'];
var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: teachers
};

console.log('typeof course:   ', typeof course);
console.log('typeof teachers: ', typeof teachers);
console.log('isArray(course)  ', Array.isArray(course));
console.log('isArray(teachers)', Array.isArray(teachers));