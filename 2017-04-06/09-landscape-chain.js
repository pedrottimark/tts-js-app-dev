function landscapeMaker() {
  var result = ""; // private variable within closure
  var landscape = {
    addFlat: function(size) {
      for (var count = 0; count < size; count++) {
        result += " _ ";
      }
      return landscape; // support the chain pattern
    },
    addHill: function(size) {
      result += "/";
      for (var count = 0; count < size; count++) {
        result += " ' ";
      }
      result += "\\"; // double because backslash is escape character
      return landscape; // support the chain pattern
    },
    getLand: function() {
      return result;
    },
  };

  return landscape;
}

var landscape = landscapeMaker();
// You can call `add` methods in a chain because they return the object.
landscape.addFlat(1).addHill(3).addFlat(7).addHill(1).addFlat(2);
console.log('call method of object:      ', landscape.getLand());

var pancake = landscapeMaker();
pancake.addFlat(5);
console.log('another instance of object: ', pancake.getLand());

var molars = landscapeMaker().addHill(1).addHill(1).addHill(1).getLand();
console.log('yet another instance:       ', molars);
