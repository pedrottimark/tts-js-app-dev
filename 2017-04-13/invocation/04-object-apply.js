// `apply` a function whose body refers to `this` with an object as context.
var object = Object.create({
  addItem: function (item) {
    this.items.push(item);
  }
});

object.items = [];
object.addItem('^');
object.addItem('^');

function joinItems(string) {
  return this.items.join(string);
}

var joined = joinItems.apply(object, [' ']);
console.log(joined);
