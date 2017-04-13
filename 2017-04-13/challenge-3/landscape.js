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

LandscapeLogic.prototype.addItem = function (key) {
  this.items.push(this.additions[key]);
};

LandscapeLogic.prototype.getString = function() {
  return this.items.join(' ');
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
