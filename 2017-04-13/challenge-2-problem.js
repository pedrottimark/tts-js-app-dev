function LandscapeLogic(dataInitial) {
  this.additions = Object.assign({}, dataInitial.additions); // idiom to copy object
  this.items = Array.isArray(dataInitial.items)
    ? dataInitial.items.slice() // idiom to copy array
    : [];
}

// Given a key, add the value of that additions property to items.
LandscapeLogic.prototype.addItem = function (key) {
  this.items.push(/* TO DO */);
};

// Return the items as a string separated by space.
LandscapeLogic.prototype.getString = function () {
  return /* TO DO */;
};

// Remove the last item that was added.
LandscapeLogic.prototype.undo = function () {
  /* TO DO */
};

// Return whether there is any item to remove.
LandscapeLogic.prototype.undoable = function () {
  return /* TO DO */;
};

function landscapeLogic(dataInitial) {
  return new LandscapeLogic(dataInitial);
}

// Because this is data for the logic object, it could differ for each instance.
var landscapeAdditions = {
  // http://www.unicode.org/charts/PDF/U2000.pdf
  land: '\u2013', // EN DASH
  tree: '^',
  water: '~',
  // http://www.unicode.org/charts/PDF/U1F680.pdf
  walking: '🚶', // U+1F6B6 PEDESTRIAN
  riding: '🚴', // U+1F6B4 BICYCLIST
  rowing: '🚣', // U+1F6A3 ROWBOAT
};

var itemsFromLastSession = ['\u2013', '^'];

var landscapeOld = landscapeLogic({
  additions: landscapeAdditions,
  items: itemsFromLastSession,
});

var landscapeNew = landscapeLogic({
  additions: landscapeAdditions,
});

landscapeOld.addItem('water');
landscapeOld.addItem('rowing');
landscapeOld.addItem('water');

landscapeNew.addItem('tree');
landscapeNew.addItem('walking');
landscapeNew.undo();
landscapeNew.addItem('land');
landscapeNew.addItem('walking');

console.log('old:', landscapeOld.getString());
console.log('new:', landscapeNew.getString());
