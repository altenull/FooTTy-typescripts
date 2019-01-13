import {all} from 'redux-saga/effects';
import foottyAPILeagueSaga from './foottyAPI-league.saga';
import foottyAPITeamSaga from './foottyAPI-team.saga';
import foorryAPIPlayerSaga from './foottyAPI-player.saga';

export default function* foottyAPISaga() {
  yield all([
    foottyAPILeagueSaga(),
    foottyAPITeamSaga(),
    foorryAPIPlayerSaga(),
  ]);
}