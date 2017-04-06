var appData = {
  name: 'Gmail',
  boxes: [
    'inbox',
    'starred',
    'sent',
    'drafts',
  ],
  contacts: {
    cid0: {
      name: 'Mark',
      address: 'mark@gmail.com',
    },
    cid1: {
      name: 'Dad',
      address: 'dad@aol.com',
    },
    cid2: {
      name: 'Karen',
      address: 'karen@yahoo.com',
    },
    cid3: {
      name: 'Sharon',
      address: 'sharon@comcast.net',
    },
    cid4: {
      name: 'Kristi',
      address: 'kristi@gmail.com',
    },
    cid5: {
      name: 'Terryn',
      address: 'terryn@aol.com',
    }
  },
  messages: {
    mid1: {
      from: 'cid1',
      to: ['cid0'],
      title: 'Hi',
      text: 'Dear Mark, …',
      box: 'inbox',
      datetime: '2017-04-06T11:12:00-04:00', // see ISO8601
      read: false,
    },
    mid2: {
      from: 'cid2',
      to: ['cid0'],
      text: 'Hi Mark, Great! You can text me when you get there…',
      datetime: '2017-04-06T08:06:00-04:00',
      prev: 'mid3',
      box: 'starred',
      read: true,
    },
    mid3: {
      from: 'cid0',
      to: ['cid2'],
      text: 'That sounds very good :)',
      datetime: '2017-04-05T15:51:00-04:00',
      prev: 'mid4',
      box: 'sent',
    },
    mid4: {
      from: 'cid2',
      to: ['cid0'],
      title: 'Greensboro Friday',
      text: 'It looks like we will be done around 1:00 on Friday…',
      datetime: '2017-04-05T15:47:00-04:00',
      box: 'starred',
      read: true,
    }
  },
};

// Using what we learn about callback functions with closures in Lesson 4 :)
// Given a box, return a function
// which returns whether a message is in the box.
function isMessageInBox(box) {
  return function (message) {
    return message.box === box;
  }
}

// Select the messages in the 'starred' box.
var isMessageInStarredBox = isMessageInBox('starred');
var array = [];

// `Object.keys` returns an array of the keys in an object,
// so you can use `forEach` to loop through its properties.
Object.keys(appData.messages).forEach(function (mid) {
  var message = appData.messages[mid];
  if (isMessageInStarredBox(message)) {
    array.push(message);
  }
});

// Sort messages in descending order by datetime property.
array.sort(function (messageA, messageB) {
  if (messageA.datetime < messageB.datetime) {
    return 1;
  } else if (messageB.datetime < messageA.datetime) {
    return -1;
  }
  return 0;
});

// Using what we learn about callback functions with closures in Lesson 4 :)
// Given the key of a property, return a function
// which returns the value of the property in a message.
function getKeyInMessage(key) {
  return function (message) {
    return message[key];
  }
}

// Log the text of the messages.
var getTitleInMessage = getKeyInMessage('text');
array.forEach(function (message) {
  console.log(getTitleInMessage(message));
});
