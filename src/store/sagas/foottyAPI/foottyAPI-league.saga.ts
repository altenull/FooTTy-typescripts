import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator, createSagaActionCreator} from '../../../lib/functions/sagaAction';
import {
  GET_ALL_TEAMS_IN_LEAGUE,
  GET_LEAGUE_SEASONS,
  GET_LEAGUE_TABLE,
  GET_NEXT_EVENTS
} from '../../modules/foottyAPI/foottyAPI-league.module';
import {SET_SELECTED_SEASON} from '../../modules/league/league.module';
import {
  EventInLeague,
  GetAllTeamsInLeagueAction,
  GetAllTeamsInLeagueResponse,
  GetLeagueSeasonsAction,
  GetLeagueSeasonsResponse,
  GetLeagueTableAction,
  GetLeagueTableResponse,
  GetNextEventsAction,
  GetNextEventsResponse,
  LeagueSeason,
  LeagueTable,
  ObjectizedEventInLeague,
  ObjectizedLeagueTable,
  ObjectizedTeamInLeague,
  TeamInLeague
} from '../../models/foottyAPI/foottyAPI-league.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';
import {SetSelectedSeasonPayload} from '../../models/league/league.model';

export const setSelectedSeasonAcionCreator = createSagaActionCreator(SET_SELECTED_SEASON);
export const getLeagueSeasonsAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_SEASONS);
export const getLeagueTableAsyncActionCreator = createAsyncActionCreator(GET_LEAGUE_TABLE);
export const getAllTeamsAsyncActionCreator = createAsyncActionCreator(GET_ALL_TEAMS_IN_LEAGUE);
export const getNextEventsAsyncActionCreator = createAsyncActionCreator(GET_NEXT_EVENTS);

export function* getLeagueSeasons(action: GetLeagueSeasonsAction) {
  yield put(getLeagueSeasonsAsyncActionCreator.request());

  try {
    const response: GetLeagueSeasonsResponse = yield call(() => foottyAPIService.getLeagueSeasons(action.payload));
    const seasons: string[] = response.seasons.reduce((acc: string[], season: LeagueSeason) => {
      return [
        ...acc,
        season.strSeason
      ];
    }, []);

    const sortedSeasons: string[] = seasons.reverse();
    yield put(getLeagueSeasonsAsyncActionCreator.success(sortedSeasons));

    // TODO: Research how to use some actions in other saga
    if (sortedSeasons.length > 0) {
      const setSelectedSeasonPayload: SetSelectedSeasonPayload = {
        selectedSeason: sortedSeasons[0]
      };

      yield put(setSelectedSeasonAcionCreator(setSelectedSeasonPayload));
    }
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

export function* getNextEvents(action: GetNextEventsAction) {
  yield put(getNextEventsAsyncActionCreator.request());

  try {
    const response: GetNextEventsResponse = yield call(() => foottyAPIService.getNextEvents(action.payload));

    const nextEvents: { [eventId: string]: ObjectizedEventInLeague } = response.events.reduce((acc: { [eventId: string]: ObjectizedEventInLeague }, event: EventInLeague) => {
      return {
        ...acc,
        [event.idEvent]: {
          strEvent: event.strEvent,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound,
          dateEvent: event.dateEvent,
          strDate: event.strDate,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam
        }
      };
    }, {});

    yield put(getNextEventsAsyncActionCreator.success(nextEvents));
  } catch (error) {
    yield put(getNextEventsAsyncActionCreator.fail());
  }
}

export default function* foottyAPILeagueSaga() {
  yield all([
    takeLatest(GET_LEAGUE_SEASONS.INDEX as any, getLeagueSeasons),
    takeLatest(GET_LEAGUE_TABLE.INDEX as any, getLeagueTable),
    takeLatest(GET_ALL_TEAMS_IN_LEAGUE.INDEX as any, getAllTeamsInLeague),
    takeLatest(GET_NEXT_EVENTS.INDEX as any, getNextEvents)
  ])
}