import {call, takeLatest, all, put} from 'redux-saga/effects';
import leagueService from '../../services/league/league.service';
import {GET_LEAGUE_SEASONS} from '../modules/league.module';
import {GetLeagueSeasonsAction} from '../models/league.model';
import {createAsyncActionCreator} from '../../lib/functions/asyncAction';

export const getLeagueSeasonsAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_SEASONS);

export function* getLeagueSeasons(action: GetLeagueSeasonsAction) {
  yield put(getLeagueSeasonsAsyncActionCreator.request());

  try {
    const response = yield call(() => leagueService.getLeagueSeasons(action.payload));
    yield put(getLeagueSeasonsAsyncActionCreator.success(response.leagues));
  } catch (error) {
    yield put(getLeagueSeasonsAsyncActionCreator.fail());
  }
}

export default function* leagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_SEASONS.INDEX as any, getLeagueSeasons)
  ])
}