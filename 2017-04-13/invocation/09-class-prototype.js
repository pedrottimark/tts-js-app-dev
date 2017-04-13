// The `prototype` object contains properties that are shared by all instances.

function Items() {
  this.items = [];
}

Items.prototype.add = function (item) {
  this.items.push(item);
};

Items.prototype.getString = function () {
  return this.items.join(' ');
};

var instance = new Items();
console.log(instance.getString());

instance.add('^');
console.log(instance.getString());

instance.add('^');
console.log(instance.getString());
