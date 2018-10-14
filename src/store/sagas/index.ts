import {all} from 'redux-saga/effects';
import leagueSaga from './league.saga';

export default function* rootSaga() {
  yield all([
    leagueSaga()
  ]);
}