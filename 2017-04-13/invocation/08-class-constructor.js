// `new` causes a constructor function invocation to return an instance.

function Items() {
  this.items = [];
  this.add = function (item) {
    this.items.push(item);
  }
  this.getString = function () {
    return this.items.join(' ');
  };
}

var instance = new Items();
console.log(instance.getString());

instance.add('^');
console.log(instance.getString());

instance.add('^');
console.log(instance.getString());
