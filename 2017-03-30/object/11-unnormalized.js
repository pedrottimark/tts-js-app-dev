var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['Assaf', 'Shane'],
  students: [
    {
      name: 'Steve',
      computer: {
        OS: 'Linux',
        type: 'laptop',
      },
    },
    {
      name: 'Katy',
      computer: {
        OS: 'OSX',
        type: 'macbook',
      },
    },
    {
      name: 'Chuck',
      computer: {
        OS: 'OSX',
        type: 'macbook',
      },
    },
  ],
};

console.log(course.teachers[0]);
console.log(course.teachers[1]);
console.log(course.students[0].name);
console.log(course.students[1].name);
console.log(course.students[2].name);