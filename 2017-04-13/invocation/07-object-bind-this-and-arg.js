// `bind` a function whose body refers to `this` with an object as context
// and another argument.
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

var joinItemsInThisObjectWithString = joinItems.bind(object, ' ');
var joined = joinItemsInThisObjectWithString();
console.log(joined);
