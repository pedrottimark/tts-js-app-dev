import {
  createStore,
  dispatch,
  getState,
} from 'redux';

import reducer from '../';

describe('reducer', () => {
  const text0 = 'Describe application state as plain objects and arrays.';
  const text1 = 'Describe changes in the system as plain objects.';
  const text2 = 'Describe the logic for handling changes as pure functions.';
  const filter = 'uncompleted';
  const actions = [
    {
      type: 'ADD_TODO',
      text: text0,
    },
    {
      type: 'TOGGLE_TODO',
      id: 0,
    },
    {
      type: 'ADD_TODO',
      text: text1,
    },
    {
      type: 'ADD_TODO',
      text: text2,
    },
    {
      type: 'CHANGE_FILTER',
      filter,
    },
    {
      type: 'TOGGLE_TODO',
      id: 2,
    },
  ];
  const expected = {
    filter,
    todos: [
      {
        text: text0,
        completed: true,
      },
      {
        text: text1,
        completed: false,
      },
      {
        text: text2,
        completed: true,
      },
    ],
  };

  it('is like a callback for reduce method of an array of actions', () => {
    const prev = {
      filter: 'all',
      todos: [],
    };
    const next = actions.reduce(reducer, prev);

    expect(next).toMatchObject(expected);
  });
  it('is called whenever the store dispatches an action', () => {
    const store = createStore(reducer);
    actions.forEach(action => {
      store.dispatch(action);
    });
    const next = store.getState();

    expect(next).toMatchObject(expected);
  });
});
