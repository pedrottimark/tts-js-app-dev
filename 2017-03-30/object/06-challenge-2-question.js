// 1. Name of the course ('JavaScript Applications')
// 2. Name of the second teacher ('Shane')
// 3. Name of the first student ('Steve')
// 4. Katy's computer type ('macbook')
// 5. The preReq equipment object
// 6. The second OSOption from equipment prereqs ('osx')
// 7. A string listing the OSOptions separated by 'or' ('linux or osx')
// 8. An array of all the students that are using OSX.

var course = {
  name: 'JavaScript Applications',
  awesome: true,
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

  ],
  preReqs : {
    skills : ['html', 'css', 'git'],
    equipment: {
      laptop: true,
      OSOptions: ['linux', 'osx']
    }
  }
};