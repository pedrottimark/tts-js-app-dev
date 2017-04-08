// Given number of digits after the decimal point, return function
// which given number, returns string with limited precision.
function fixerMaker(maxDigits) {
  return function (number) {
    var toString = number.toString();
    var toFixed = number.toFixed(maxDigits);

    // A ternary expression is an alternative to an if statement:
    return toFixed.length < toString.length ? toFixed : toString;
  };
}

var fixer2 = fixerMaker(2);
var fixer3 = fixerMaker(3);

[1 / 2, 1 / 4, 7 / 8, 29 / 63].forEach(function (fraction) {
  console.log(fraction, fixer2(fraction), fixer3(fraction));
});
