function LandscapeLogic(dataInitial) {
  this.additions = /* TO DO */;
  this.items = /* TO DO */;
}

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

landscapeAdditions.swimming = '🏊', // U+1F3CA SWIMMER
itemsFromLastSession.length = 0;

console.log(landscapeOld);
console.log(landscapeNew);
