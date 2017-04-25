'use strict';

// This function is known as a virtual constructor,
// because it hides the decision how to instantiate objects.
function landscapeLogic(dataInitial) {
  return new LandscapeLogic(dataInitial);
}

// Class to implement “business logic” for landscape.
function LandscapeLogic(dataInitial) {
  this.additions = Object.assign({}, dataInitial.additions);
  this.items = Array.isArray(dataInitial.itemsInitial)
    ? dataInitial.itemsInitial.slice()
    : [];
}

function addItem(items, key) {
  return items.concat(key);
}

LandscapeLogic.prototype.addItem = function (key) {
  this.items = addItem(this.items, key);
};

function getString(additions, items) {
  return items.map(function (key) {
    return additions[key];
  }).join(' ')
}

LandscapeLogic.prototype.getString = function() {
  return getString(this.additions, this.items);
};

landscapeLogic.prototype.getData = function () {
  return this.items;
};

LandscapeLogic.prototype.undo = function () {
  this.items.pop();
};

LandscapeLogic.prototype.undoable = function () {
  return this.items.length !== 0;
};

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

(function test1() {
var itemsPrev = ['land', 'tree'];
var item = 'water';
var itemsNext = addItem(itemsPrev, item);
console.log(itemsNext.length === itemsPrev.length + 1);
console.log(itemsNext[itemsNext.length - 1] === item);
}());

(function test2() {
var itemsPrev = [];
var item = 'water';
var itemsNext = addItem(itemsPrev, item);
console.log(itemsNext.length === itemsPrev.length + 1);
console.log(itemsNext[itemsNext.length - 1] === item);
}());

(function test3() {
var items = ['land', 'tree', 'water'];
console.log(getString(landscapeAdditions, items) === '\u2013 ^ ~');
}());

// Make each landscape area interactive with its own instance of logic.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
document.querySelectorAll('.landscape').forEach(function (ancestor) {
  var landscape; // instance of “business logic” for landscape
  var outputElement; // required
  var undoButton; // optional

  function update() {
    outputElement.innerHTML = landscape.getString();
    if (undoButton) {
      undoButton.disabled = !landscape.undoable();
    }
  }

  function makeEventListener(callback) {
    return function () {
      callback(); // for example, add land
      update(); // update interface after each action
    }
  }

  var outputElements = ancestor.querySelectorAll('.output');
  var addButtons = ancestor.querySelectorAll('.add');
  var undoButtons = ancestor.querySelectorAll('.undo');

  if (outputElements.length === 1 && addButtons.length !== 0) {
    landscape = landscapeLogic({
      additions: landscapeAdditions,
    });
    outputElement = outputElements[0];

    addButtons.forEach(function (addButton) {
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
      var key = addButton.dataset.landscapeAdd; // for example, data-landscape-add="land"
      if (typeof key === 'string') {
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
        addButton.addEventListener('click', makeEventListener(landscape.addItem.bind(landscape, key)));
      }
    });

    if (undoButtons.length === 1) {
      undoButton = undoButtons[0];
      undoButton.addEventListener('click', makeEventListener(landscape.undo.bind(landscape)));
    }

    update(); // initialize the interface, especially the Undo button
  }
});
