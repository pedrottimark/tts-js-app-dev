function landscapeMaker() {
  return {
    result: "", // public property of object instance
    addFlat: function(size) {
      for (var count = 0; count < size; count++) {
        this.result += " _ ";
      }
      return this; // support the chain pattern
    },
    addHill: function(size) {
      this.result += "/";
      for (var count = 0; count < size; count++) {
        this.result += " ' ";
      }
      this.result += "\\"; // double because backslash is escape character
      return this; // support the chain pattern
    },
    getLand: function() {
      return this.result;
    },
  };
}

var landscape = landscapeMaker();
// You can call `add` methods in a chain because they return `this`
landscape.addFlat(1).addHill(3).addFlat(7).addHill(1).addFlat(2);
console.log('call get method of object:  ', landscape.getLand());
console.log('refer to property of object:', landscape.result);

var pancake = landscapeMaker();
pancake.addFlat(5);
console.log('another instance of object: ', pancake.getLand());

var molars = landscapeMaker().addHill(1).addHill(1).addHill(1).getLand();
console.log('yet another instance:       ', molars);
