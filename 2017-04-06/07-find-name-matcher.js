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
];

// Given a name, return a function
// which matches a person object whose name property has that value.
// Matchmaker, matchmaker, make me a matcher, to find me a name :)
function personNameMatcher(name) {
  return function (person) {
    return person.name === name; // closure includes arguments person and name
  };
}

var i = people.findIndex(personNameMatcher('Katy'));
console.log(i, people[i].name, people[i].computer.type);

i = people.findIndex(personNameMatcher('Steve'));
console.log(i, people[i].name, people[i].computer.type);
