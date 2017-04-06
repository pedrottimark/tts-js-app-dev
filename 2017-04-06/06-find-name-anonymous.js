var people = [
  {
    name: 'Assaf',
  },
  {
    name: 'Shane',
  },
  {
    name: 'Steve',
    computer: {
      system: 'Linux',
      type: 'laptop',
    },
  },
  {
    name: 'Katy',
    computer: {
      system: 'OSX',
      type: 'macbook',
    },
  },
  {
    name: 'Chuck',
    computer: {
      sysmte: 'Windows',
      type: 'desktop',
    },
  },
];

var i = people.findIndex(function (person) {
  return person.name === 'Katy'; // closure includes argument person
});
console.log(i, people[i].name, people[i].computer.type);
