// A method of an object which has mutable state.
var object = Object.create({
  addItem: function (item) {
    this.items.push(item);
  }
});

object.items = [];
console.log(object.items);

object.addItem('^');
console.log(object.items);

object.addItem('^');
console.log(object.items);
