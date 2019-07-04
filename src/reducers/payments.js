

export default (state = [], action) => {
  switch (action.type) {
    case 'SET_PAYMENTS':
      return action.payments;
    default:
      return state;
  }
};
