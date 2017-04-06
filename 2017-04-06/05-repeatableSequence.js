// Given an array of values, return a function
// which returns the next value each time it is called.
function repeatableSequence(array) {
  var i = 0;
  return function() {
    return array[i++]; // closure includes argument array and inner variable i
  };
}

// Provide “random” numbers for a test.
var randomInt = repeatableSequence([1, 2, 1, 2, 0, 0, 0, 1, 0, 1]);

// Call the function in the test.
for (var i = 0; i < 10; i += 1) {
  console.log(randomInt());
}
