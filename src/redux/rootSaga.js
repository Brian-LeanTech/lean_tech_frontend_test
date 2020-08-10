import { all } from 'redux-saga/effects';

//  sagas
import orders from 'redux/ducks/orders/saga';

export default function* rootSaga() {
  yield all([
    orders(),
  ]);
}
