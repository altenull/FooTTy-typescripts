import {call, takeLatest, all, put} from 'redux-saga/effects';
import leagueService from '../../services/league/league.service';
import {GET_LEAGUE_SEASONS, GET_LEAGUE_TABLE} from '../modules/league.module';
import {
  GetLeagueSeasonsAction,
  GetLeagueSeasonsResponse,
  GetLeagueTableAction,
  GetLeagueTableResponse,
  LeagueSeason
} from '../models/league.model';
import {createAsyncActionCreator} from '../../lib/functions/asyncAction';

export const getLeagueSeasonsAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_SEASONS);
export const getLeagueTableAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_TABLE);

export function* getLeagueSeasons(action: GetLeagueSeasonsAction) {
  yield put(getLeagueSeasonsAsyncActionCreator.request());

  try {
    const response: GetLeagueSeasonsResponse = yield call(() => leagueService.getLeagueSeasons(action.payload));
    const seasons: string[] = response.leagues.reduce((acc: string[], season: LeagueSeason) => {
      return [
        ...acc,
        season.strSeason
      ];
    }, []);

    const sortedSeasons: string[] = seasons.reverse();
    yield put(getLeagueSeasonsAsyncActionCreator.success(sortedSeasons));
  } catch (error) {
    yield put(getLeagueSeasonsAsyncActionCreator.fail());
  }
}

export function* getLeagueTable(action: GetLeagueTableAction) {
  yield put(getLeagueTableAsyncActionCreator.request());

  try {
    const response: GetLeagueTableResponse = yield call(() => leagueService.getLeagueTable(action.payload));
    // TODO: handle getLeagueTable response to store to leagueTable state
    console.log('response', response);
    // yield put(getLeagueTableAsyncActionCreator.success());
  } catch (error) {
    yield put(getLeagueTableAsyncActionCreator.fail());
  }
}

export default function* leagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_SEASONS.INDEX as any, getLeagueSeasons),
    takeLatest(GET_LEAGUE_TABLE.INDEX as any, getLeagueTable)
  ])
}