import reducer from '../filter';

describe('filter reducer', () => {
  it('sets the same value', () => {
    const prev = 'all';
    const filter = prev;
    const next = reducer(prev, {
      type: 'CHANGE_FILTER',
      filter,
    });
    expect(next).toBe(filter);
  });
  it('sets a different value', () => {
    const prev = 'all';
    const filter = 'completed';
    const next = reducer(prev, {
      type: 'CHANGE_FILTER',
      filter,
    });
    expect(next).toBe(filter);
  });
});
