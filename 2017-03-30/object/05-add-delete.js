var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane']
};
console.log('awesome before:', course.awesome);
console.log('fun     before:', course.fun);

course.fun = true;
delete course.awesome;
console.log('awesome after: ', course.awesome);
console.log('fun     after: ', course.fun);