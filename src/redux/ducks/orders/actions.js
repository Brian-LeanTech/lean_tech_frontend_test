import * as types from './types';

export const ordersFetchRequest = () => ({
  type: types.ORDERS_FETCH_REQUEST,
});

export const ordersFetchSuccess = (res) => ({
  type: types.ORDERS_FETCH_SUCCESS,
  res,
});

export const ordersFetchFail = (error) => ({
  type: types.ORDERS_FETCH_FAIL,
  error,
});

export const ordersUpdate = (id, city) => ({
  type: types.ORDERS_UPDATE,
  id,
  city,
});
