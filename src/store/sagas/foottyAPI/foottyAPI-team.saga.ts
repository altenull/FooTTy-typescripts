import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator} from '../../../lib/functions/sagaAction';
import {
  GET_ALL_PLAYERS_IN_TEAM,
  GET_NEXT_5_EVENTS,
  GET_LAST_5_EVENTS,
} from '../../modules/foottyAPI/foottyAPI-team.module';
import {
  GetAllPlayersInTeamAction,
  GetAllPlayersInTeamResponse,
  ObjectizedPlayerInTeam,
  Player,
  GetNext5EventsAction,
  GetNext5EventsResponse,
  ObjectizedNextEvent,
  GetLast5EventsAction,
  GetLast5EventsResponse,
  ObjectizedLastEvent,
  Event,
} from '../../models/foottyAPI/foottyAPI-team.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';

export const getAllPlayersInTeamAsyncActionCreator = createAsyncActionCreator(GET_ALL_PLAYERS_IN_TEAM);
export const getNext5EventsAsyncActionCreator = createAsyncActionCreator(GET_NEXT_5_EVENTS);
export const getLast5EventsAsyncActionCreator = createAsyncActionCreator(GET_LAST_5_EVENTS);

export function* getNext5Events(action: GetNext5EventsAction) {
  yield put(getNext5EventsAsyncActionCreator.request());

  try {
    const response: GetNext5EventsResponse = yield call(() => foottyAPIService.getNext5Events(action.payload));
    const events: { [eventId: string]: ObjectizedNextEvent } = response.events.reduce((acc: { [eventId: string]: ObjectizedNextEvent }, event: Event) => {
      return {
        ...acc,
        [event.idEvent]: {
          idEvent: event.idEvent,
          strEvent: event.strEvent,
          strFilename: event.strFilename,
          idLeague: event.idLeague,
          strLeague: event.strLeague,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound ? event.intRound : null,
          dateEvent: event.dateEvent,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam,
        },
      };
    }, {});

    yield put(getNext5EventsAsyncActionCreator.success(events));
  } catch (error) {
    yield put(getNext5EventsAsyncActionCreator.fail());
  }
}

export function* getLast5Events(action: GetLast5EventsAction) {
  yield put(getLast5EventsAsyncActionCreator.request());

  try {
    const response: GetLast5EventsResponse = yield call(() => foottyAPIService.getLast5Events(action.payload));
    const events: { [eventId: string]: ObjectizedLastEvent } = response.results.reduce((acc: { [eventId: string]: ObjectizedLastEvent }, event: Event) => {
      return {
        ...acc,
        [event.idEvent]: {
          idEvent: event.idEvent,
          strEvent: event.strEvent,
          strFilename: event.strFilename,
          idLeague: event.idLeague,
          strLeague: event.strLeague,
          strHomeTeam: event.strHomeTeam,
          strAwayTeam: event.strAwayTeam,
          intRound: event.intRound ? event.intRound : null,
          strHomeGoalDetails: event.strHomeGoalDetails ? event.strHomeGoalDetails : null,
          strAwayGoalDetails: event.strAwayGoalDetails ? event.strAwayGoalDetails : null,
          strHomeYellowCards: event.strHomeYellowCards ? event.strHomeYellowCards : null,
          strAwayYellowCards: event.strAwayYellowCards ? event.strAwayYellowCards : null,
          strHomeRedCards: event.strHomeRedCards ? event.strHomeRedCards : null,
          strAwayRedCards: event.strAwayRedCards ? event.strAwayRedCards : null,
          dateEvent: event.dateEvent,
          strTime: event.strTime,
          idHomeTeam: event.idHomeTeam,
          idAwayTeam: event.idAwayTeam,
        },
      };
    }, {});

    yield put(getLast5EventsAsyncActionCreator.success(events));
  } catch (error) {
    yield put(getLast5EventsAsyncActionCreator.fail());
  }
}

export function* getAllPlayersInTeam(action: GetAllPlayersInTeamAction) {
  yield put(getAllPlayersInTeamAsyncActionCreator.request());

  try {
    const response: GetAllPlayersInTeamResponse = yield call(() => foottyAPIService.getAllPlayersInTeam(action.payload));
    const players: { [playerId: string]: ObjectizedPlayerInTeam } = response.player.reduce((acc: { [playerId: string]: ObjectizedPlayerInTeam }, player: Player) => {
      return {
        ...acc,
        [player.idPlayer]: {
          idTeam: player.idTeam ? player.idTeam : null,
          idPlayerManager: player.idPlayerManager ? player.idPlayerManager : null,
          strNationality: player.strNationality,
          strPlayer: player.strPlayer,
          dateBorn: player.dateBorn ? player.dateBorn : null,
          strPosition: player.strPosition ? player.strPosition : null,
          strHeight: player.strHeight ? player.strHeight : null,
          strWeight: player.strWeight ? player.strWeight : null,
          facebookUrl: player.strFacebook ? player.strFacebook : null,
          websiteUrl: player.strWebsite ? player.strWebsite : null,
          twitterUrl: player.strTwitter ? player.strTwitter : null,
          instagramUrl: player.strInstagram ? player.strInstagram : null,
          youtubeUrl: player.strYoutube ? player.strYoutube : null,
          thumbUrl: player.strThumb ? player.strThumb : null
        },
      };
    }, {});

    yield put(getAllPlayersInTeamAsyncActionCreator.success(players));
  } catch (error) {
    yield put(getAllPlayersInTeamAsyncActionCreator.fail());
  }
}

export default function* foottyAPITeamSaga() {
  yield all([
    takeLatest(GET_ALL_PLAYERS_IN_TEAM.INDEX as any, getAllPlayersInTeam),
    takeLatest(GET_NEXT_5_EVENTS.INDEX as any, getNext5Events),
    takeLatest(GET_LAST_5_EVENTS.INDEX as any, getLast5Events),
  ])
}
