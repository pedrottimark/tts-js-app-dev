// A pure function with immutable data.
function addItem(items, item) {
  return items.concat(item);
}

var itemsPrev = [];
console.log(itemsPrev);

var itemsNextA = addItem(itemsPrev, '^');
console.log(itemsNextA);

var itemsNextB = addItem(itemsPrev, '^');
console.log(itemsNextB);
