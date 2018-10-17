import {all, call, put, takeEvery} from 'redux-saga/effects';
import leagueService from '../../services/league/league.service';
import {GetLeagueSeasonsPayload} from '../../services/league/models';
import {GET_LEAGUE_SEASONS} from '../modules/league.module';

// TODO: solve takeEvent parameter type
function* takeGetLeagueSeasons() {
  yield takeEvery(GET_LEAGUE_SEASONS, getLeagueSeasons);
}

export function* getLeagueSeasons(payload: GetLeagueSeasonsPayload) {
  const result = yield call(() => leagueService.getLeagueSeasons(payload));
  console.log(result);

  yield put({
    type: 'GET_LEAGUE_SEASONS_SUCCESS',
    payload: result.json()
  })
}

export default function* leagueSaga() {
  yield all([
    takeGetLeagueSeasons()
  ])
}