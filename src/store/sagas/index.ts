import {all} from 'redux-saga/effects';
import foottyAPISaga from './foottyAPI/foottyAPI.saga';

export default function* rootSaga() {
  yield all([
    foottyAPISaga()
  ]);
}