//  redux
import { combineReducers } from 'redux';

//  reducers
import filters from './ducks/filters/reducer';
import orders from './ducks/orders/reducer';
import shipmentModal from './ducks/shipmentModal/reducer';

export default combineReducers({
  ui: combineReducers({
    filters,
    shipmentModal,
  }),
  entities: combineReducers({
    orders,
  }),
});
