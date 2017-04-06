function landscapeMaker() {
  var result = ""; // private variable within closure

  return {
    addFlat: function(size) {
      for (var count = 0; count < size; count++) {
        result += " _ ";
      }
    },
    addHill: function(size) {
      result += "/";
      for (var count = 0; count < size; count++) {
        result += " ' ";
      }
      result += "\\"; // double because backslash is escape character
    },
    getLand: function() {
      return result;
    },
  };
}

var landscape = landscapeMaker();
landscape.addFlat(1);
landscape.addHill(3);
landscape.addFlat(7);
landscape.addHill(1);
landscape.addFlat(2);
console.log('call method of object:      ', landscape.getLand());

var pancake = landscapeMaker();
pancake.addFlat(5);
console.log('another instance of object: ', pancake.getLand());
console.log('does not affect the other:  ', landscape.getLand());
