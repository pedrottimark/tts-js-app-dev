import reducer from '../todos';

describe('todos reducer', () => {
  it('adds an item to an empty array', () => {
    const prev = [];
    const text = 'add an item';
    const next = reducer(prev, {
      type: 'ADD_TODO',
      text,
    });

    expect(next.length).toBe(prev.length + 1);
    expect(next[next.length - 1]).toMatchObject({
      text,
      completed: false,
    })
  });
  /*
    write a test that adds an item to a non-empty array
  */
  it('toggles an item from uncompleted to completed', () => {
    const id = 0;
    const text = 'toggle an item';
    const prev = [
      {
        id,
        text,
        completed: false,
      }
    ];
    const next = reducer(prev, {
      type: 'TOGGLE_TODO',
      id,
    });

    expect(next[0]).toMatchObject({
      id,
      text,
      completed: true,
    });
  });
  /*
    write a test that toggles an item from completed to uncompleted
  */
});
