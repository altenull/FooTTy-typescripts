import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator} from '../../../lib/functions/asyncAction';
import {
  GET_ALL_TEAMS_IN_LEAGUE,
  GET_LEAGUE_SEASONS,
  GET_LEAGUE_TABLE
} from '../../modules/foottyAPI/foottyAPI-league.module';
import {
  GetAllTeamsInLeagueAction,
  GetAllTeamsInLeagueResponse,
  GetLeagueSeasonsAction,
  GetLeagueSeasonsResponse,
  GetLeagueTableAction,
  GetLeagueTableResponse,
  LeagueSeason,
  LeagueTable,
  ObjectizedLeagueTable,
  ObjectizedTeamInLeague,
  TeamInLeague
} from '../../models/foottyAPI/foottyAPI-league.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';

export const getLeagueSeasonsAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_SEASONS);
export const getLeagueTableAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_TABLE);
export const getAllTeamsAsyncActionCreator = createAsyncActionCreator(GET_ALL_TEAMS_IN_LEAGUE);

export function* getLeagueSeasons(action: GetLeagueSeasonsAction) {
  yield put(getLeagueSeasonsAsyncActionCreator.request());

  try {
    const response: GetLeagueSeasonsResponse = yield call(() => foottyAPIService.getLeagueSeasons(action.payload));
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
    const response: GetLeagueTableResponse = yield call(() => foottyAPIService.getLeagueTable(action.payload));
    const leagueTable: { [teamId: string]: ObjectizedLeagueTable } = response.table.reduce((acc: { [teamId: string]: ObjectizedLeagueTable }, table: LeagueTable, index: number) => {
      const {teamid: extractedValue, ...tableEntity} = table;

      return {
        ...acc,
        [table.teamid]: {
          ...tableEntity,
          rank: index
        }
      };
    }, {});

    yield put(getLeagueTableAsyncActionCreator.success(leagueTable));
  } catch (error) {
    yield put(getLeagueTableAsyncActionCreator.fail());
  }
}

export function* getAllTeamsInLeague(action: GetAllTeamsInLeagueAction) {
  yield put(getAllTeamsAsyncActionCreator.request());

  try {
    const response: GetAllTeamsInLeagueResponse = yield call(() => foottyAPIService.getAllTeamsInLeague(action.payload));

    const allTeamsInLeague: { [teamId: string]: ObjectizedTeamInLeague } = response.teams.reduce((acc: { [teamId: string]: ObjectizedTeamInLeague }, team: TeamInLeague) => {
      return {
        ...acc,
        [team.idTeam]: {
          formedYear: team.intFormedYear ? team.intFormedYear : null,
          stadiumCapacity: team.intStadiumCapacity ? team.intStadiumCapacity : null,
          facebookUrl: team.strFacebook ? team.strFacebook : null,
          instagramUrl: team.strInstagram ? team.strInstagram : null,
          twitterUrl: team.strTwitter ? team.strTwitter : null,
          youtubeUrl: team.strYoutube ? team.strYoutube : null,
          websiteUrl: team.strWebsite ? team.strWebsite : null,
          badgeUrl: team.strTeamBadge ? team.strTeamBadge : null
        }
      };
    }, {});

    yield put(getAllTeamsAsyncActionCreator.success(allTeamsInLeague));
  } catch (error) {
    yield put(getAllTeamsAsyncActionCreator.fail());
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_SEASONS.INDEX as any, getLeagueSeasons),
    takeLatest(GET_LEAGUE_TABLE.INDEX as any, getLeagueTable),
    takeLatest(GET_ALL_TEAMS_IN_LEAGUE.INDEX as any, getAllTeamsInLeague)
  ])
}