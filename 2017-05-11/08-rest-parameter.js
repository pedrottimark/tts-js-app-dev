const propsCompleted = {
  color: 'black',
  textDecoration: 'line-through',
};
const propsUncompleted = {
  color: 'green',
  textDecoration: 'none',
};

// Example of rest parameter in function definition:

// Given an element type, props, and children,
// return a React test object.
const testObject = (type, props, ...children) => ({
  type: type,
  props: props,
  children: children,
});

const item0 = testObject('li', propsCompleted, 'Write less, do more');
const item1 = testObject('li', propsUncompleted, 'Find something');
const item2 = testObject('li', propsUncompleted, 'Do something');

const items = [item0, item1, item2];

// Example of rest parameter in function invocation:

//                         testObject('ul', null, item0, item1, item2);
console.log(JSON.stringify(testObject('ul', null, ...items), null, 2));
