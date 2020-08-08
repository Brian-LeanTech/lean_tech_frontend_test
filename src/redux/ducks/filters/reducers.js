import * as types from './types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FILTERS_UPDATE:
      return {
        ...state,
        ...action.data,
      };

    case types.FILTERS_DELETE_ALL:
      return { ...initialState };

    default:
      return state;
  }
};
