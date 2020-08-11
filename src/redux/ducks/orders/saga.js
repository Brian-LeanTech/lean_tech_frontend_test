import { call, put, takeEvery } from 'redux-saga/effects';
import API from 'API';
import * as types from './types';
import { ordersFetchSuccess, ordersFetchFail } from './actions';

function* fetchOrders(action) {
  try {
    const { data } = yield call(API.OrdersService.getOrders);
    yield put(ordersFetchSuccess(data));
    action.callback(data);
  } catch (error) {
    yield put(ordersFetchFail({ error: error.message }));
  }
}

export default function* sagaOrders() {
  yield takeEvery(types.ORDERS_FETCH_REQUEST, fetchOrders);
}
