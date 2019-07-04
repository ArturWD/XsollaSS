import { createStore, combineReducers } from 'redux';
import paymentsReducer from '../reducers/payments';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      payments: paymentsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
