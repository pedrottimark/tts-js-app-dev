// Return a random non-negative integer that is less than n.
function randomInt(n) {
  return Math.floor(Math.random() * n);
}

for (var i = 0; i < 10; i += 1) {
  console.log(randomInt(3));
}
