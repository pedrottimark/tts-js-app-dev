// Given number of digits after the decimal point, return function
// which given number, returns string with limited precision.
function fixerMaker(maxDigits) {
  return function (number) {
    // Please fill in the body of the function which is returned :)
  };
}

var fixer2 = fixerMaker(/* Please fill in this argument */);
var fixer3 = fixerMaker(/* Please fill in this argument */);

[1 / 2, 1 / 4, 7 / 8, 29 / 63].forEach(function (fraction) {
  console.log(fraction, fixer2(fraction), fixer3(fraction));
});
