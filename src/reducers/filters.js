// Filters Reducer
const filtersReducerDefaultState = {
  project_name: 'all',
  user: '',
  payment_method: 'all',
  purchase: '',
  status: 'all',
  sortBy: '',

};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        [action.field]: action.value
      }
    case 'SET_SORT':
      return{
        ...state,
        sortBy: action.sortBy
      }
    default:
      return state;
  }
};
