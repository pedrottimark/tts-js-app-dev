var x = {name: 'Evan'}
var y = {name: 'Evan'}
console.log(x === y);

var y = x;
console.log(x === y);

x.name = 'Noah';
console.log(y.name);