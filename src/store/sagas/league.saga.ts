import {all} from 'redux-saga/effects';

export function* getLeagueSaga() {
  yield console.log('getLeagueSaga!');
}

export function* deleteLeagueSaga() {
  yield console.log('deleteLeagueSaga!');
}

export default function* leagueSaga() {
  yield all([
    getLeagueSaga(),
    deleteLeagueSaga()
  ])
}