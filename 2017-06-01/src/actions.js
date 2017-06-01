// Given text, return action to add a new item.
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
}

// Given id, return action to toggle completed property of item with that id.
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}

// Given id and text, return action to replace text of item with that id.
export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
  };
}

// Given filter, return action to set that filter criterion.
export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter,
  };
}
