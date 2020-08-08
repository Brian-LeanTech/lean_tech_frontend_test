//  redux
import { combineReducers } from 'redux';

//  reducers
import filters from './ducks/filters/reducers';

export default combineReducers({
  ui: combineReducers({
    filters,
  }),
  // entities: combineReducers({})
});
