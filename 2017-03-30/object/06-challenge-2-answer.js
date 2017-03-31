var course = {
	name: 'JavaScript Applications',
	awesome: true,
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	},
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}
	]
};

// 1. Name of the course ('JavaScript Applications')
console.log('Name of the course:', course.name);

// 2. Name of the second teacher ('Shane')
console.log('Name of the second teacher:', course.teachers[1]);

// 3. Name of the first student ('Steve')
console.log('Name of the first student:', course.students[0].name);

// 4. Katy's computer type ('macbook')
// Excellent point in class that there is an array method to do this.
for (var i = 0; i < course.students.length; i += 1) {
	if (course.students[i].name === 'Katy') {
		break;
	}
}
if (i < course.students.length) {
	console.log('Katy’s computer type:', course.students[i].computer.type);
}

// 5. The preReq equipment object
console.log('The preReq equipment object:', course.preReqs.equipment);

// 6. The second OSOption from equipment prereqs ('osx')
console.log('The second OSOption from equipment prereqs:', course.preReqs.equipment.OSOptions[1]);

// 7. A string listing the OSOptions separated by 'or' ('linux or osx')
console.log('string listing the OSOptions separated by "or":', course.preReqs.equipment.OSOptions.join(' or '));

// 8. An array of all the students that are using OSX.
var studentsUsingOSX = [];
course.students.forEach(function(student) {
  if (student.computer.OS === 'OSX') {
    studentsUsingOSX.push(student);
  }
});
console.log('An array of all the students that are using OSX:', studentsUsingOSX);
