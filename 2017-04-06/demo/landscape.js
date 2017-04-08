// Given optional initial items,
// return object with methods which implements “business logic” for landscape.
function landscapeLogic(itemsInitial) {
  var items = itemsInitial || []; // private variable within closure

  return {
    add: {
      // http://www.unicode.org/charts/PDF/U2000.pdf
      land: function() {
        items.push('\u2013'); // EN DASH
      },
      tree: function() {
        items.push('^');
      },
      water: function() {
        items.push('~');
      },
      // http://www.unicode.org/charts/PDF/U1F680.pdf
      walking: function () {
        items.push('🚶'); // U+1F6B6 PEDESTRIAN
      },
      riding: function () {
        items.push('🚴'); // U+1F6B4 BICYCLIST
      },
      rowing: function () {
        items.push('🚣'); // U+1F6A3 ROWBOAT
      },
    },
    getString: function() {
      return items.join(' ');
    },
    undo: function () {
      items.pop();
    },
    undoable: function () {
      return items.length !== 0;
    }
  };
}

// Given ancestor element which contains landscape elements,
// add event listeners to buttons: call a method, and then update.
function landscapeInteraction(ancestor) {
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
    landscape = landscapeLogic();
    outputElement = outputElements[0];

    addButtons.forEach(function (addButton) {
      // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
      var key = addButton.dataset.landscapeAdd; // for example, data-landscape-add="water"
      if (key && typeof landscape.add[key] === 'function') {
        // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        addButton.addEventListener('click', makeEventListener(landscape.add[key]));
      }
    });

    if (undoButtons.length === 1) {
      undoButton = undoButtons[0];
      undoButton.addEventListener('click', makeEventListener(landscape.undo));
    }

    update(); // initialize the interface, especially the Undo button
  }
}

// For each landscape area, create a separate instance :)
function initializeInterface() {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
  // https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
  document.querySelectorAll('.landscape').forEach(function (ancestor) {
    landscapeInteraction(ancestor);
  });
}

initializeInterface();
