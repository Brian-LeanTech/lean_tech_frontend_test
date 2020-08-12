import * as types from './types';

const initialState = {
  open: false,
  idShipment: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SHIPMENT_MODAL:
      return { ...action.data };

    default:
      return state;
  }
};
