import * as types from './types';

const initialState = {
  loading: false,
  error: [],
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ORDERS_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ORDERS_FETCH_SUCCESS:
      return {
        loading: false,
        error: [],
        data: action.res,
      };
    case types.ORDERS_FETCH_FAIL:
      return {
        loading: false,
        data: [],
        error: [...state.error, action.error],
      };
    default:
      return state;
  }
};