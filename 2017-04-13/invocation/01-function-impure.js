// An impure function with mutable data.
function addItem(items, item) {
  items.push(item);
}

var items = [];
console.log(items);

addItem(items, '^');
console.log(items);

addItem(items, '^');
console.log(items);
