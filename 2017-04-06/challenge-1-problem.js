// Log numbers converted to strings to learn about `toString` and `toFixed`
function logger(number, maxDigits) {
  var toString = number.toString();
  var toFixed = number.toFixed(maxDigits);
  console.log(toString, toFixed);
}

var fraction = 1 / 4;
logger(fraction, 1);
logger(fraction, 2);
logger(fraction, 3);

// Given number, return string with limited precision
// at most maxDigits after the decimal point.
function fixer(number, maxDigits) {
  var toString = number.toString();
  var toFixed = number.toFixed(maxDigits);

  // Please add one or more return statements here :)
}

console.log(fixer(fraction, 1)); // 0.3
console.log(fixer(fraction, 2)); // 0.25
console.log(fixer(fraction, 3)); // 0.25 is correct, but 0.250 is incorrect
console.log(fixer(  1 /  2, 3)); // 0.5
console.log(fixer(  7 /  8, 3)); // 0.875
console.log(fixer( 29 / 63, 3)); // 0.460
