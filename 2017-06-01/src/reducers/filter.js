export default (filter = 'all', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.filter;
    default:
      return filter;
  }
};
