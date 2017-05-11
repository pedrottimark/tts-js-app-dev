(function () {
  // Put together at left of =
  // with object dot notation
  var point = {};
  point.x =  1 /  2;
  point.y = 29 / 63;

  // Take apart at right of =
  // with object dot notation
  var x = point.x; //  1 /  2
  var y = point.y; // 29 / 63
  console.log('object dot notation: ', x, y);
}());

(function () {
  // Put together at right of =
  // with object literal notation
  var point = {
    x:  1 /  2,
    y: 29 / 63,
  };

  // Take apart at left of =
  // with object destructuring
  var {
    x,              //  1 /  2
    y,              // 29 / 63
  } = point;
  console.log('object destructuring:', x, y);
}());
