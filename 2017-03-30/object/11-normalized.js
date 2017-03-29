var course = {
  name: 'JavaScript Applications',
  awesome: true,
  teachers: ['id1', 'id2'],
  students: ['id3', 'id4', 'id5'],
};
var people = {
  id1: {
    name: 'Assaf',
  },
  id2: {
    name: 'Shane',
  },
  id3: {
    name: 'Steve',
    computer: {
      OS: 'Linux',
      type: 'laptop',
    },
  },
  id4: {
    name: 'Katy',
    computer: {
      OS: 'OSX',
      type: 'macbook',
    },
  },
  id5: {
    name: 'Chuck',
    computer: {
      OS: 'OSX',
      type: 'macbook',
    },
  },
};

console.log(people[course.teachers[0]].name);
console.log(people[course.teachers[1]].name);
console.log(people[course.students[0]].name);
console.log(people[course.students[1]].name);
console.log(people[course.students[2]].name);