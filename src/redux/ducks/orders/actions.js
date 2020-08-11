import * as types from './types';

export const ordersFetchRequest = (callback) => ({
  type: types.ORDERS_FETCH_REQUEST,
  callback,
});

export const ordersFetchSuccess = (res) => ({
  type: types.ORDERS_FETCH_SUCCESS,
  res,
});

export const ordersFetchFail = (error) => ({
  type: types.ORDERS_FETCH_FAIL,
  error,
});
