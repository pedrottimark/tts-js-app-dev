// Return the sum of the arguments.
function sum() {
  var n = 0;
  for (var i = 0; i < arguments.length; i++) {
    n += arguments[i];
  }
  console.log('i inside function:        ', i);
  return n;
}

console.log('return value of sum(9, 16)', sum(9, 16));
console.log('i outside function:       ', i); // Reference Error
