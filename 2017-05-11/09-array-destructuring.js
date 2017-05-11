(function () {
  // Put together at left of =
  // with array index notation
  const point = [];
  point[0] =  1 /  2;
  point[1] = 29 / 63;

  // Take apart at right of =
  // with array index notation
  const x = point[0];
  const y = point[1];
  console.log('array index notation:', x, y);
}());

(function () {
  // Put together at right of =
  // with array literal notation
  const point = [
     1 /  2,
    29 / 63,
  ];

  // Take apart at left of =
  // with array destructuring
  const [
    x,
    y,
  ] = point;
  console.log('array destructuring: ', x, y);
}());
