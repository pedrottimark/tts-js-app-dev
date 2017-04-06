// Given a non-negative integer n, return a function
// which returns a random non-negative integer that is less than n.
function randomIntFactory(n) {
  return function() {
    return Math.floor(Math.random() * n); // closure includes argument n
  };
}

// Provide inputs to a function in one part of a program.
var randomInt = randomIntFactory(3);

// Call the function in another part of a program.
for (var i = 0; i < 10; i += 1) {
  console.log(randomInt());
}
