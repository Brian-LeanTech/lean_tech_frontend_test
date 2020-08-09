//  redux
import { combineReducers } from 'redux';

//  reducers
import filters from './ducks/filters/reducer';
import orders from './ducks/orders/reducer';

export default combineReducers({
  ui: combineReducers({
    filters,
  }),
  entities: combineReducers({
    orders,
  }),
});
