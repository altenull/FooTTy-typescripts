import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator} from '../../../lib/functions/sagaAction';
import {GET_FORMER_TEAMS, GET_HONOURS} from '../../modules/foottyAPI/foottyAPI-player.module';
import {
  FormerTeam,
  GetFormerTeamsAction,
  GetFormerTeamsResponse, GetHonoursAction, GetHonoursResponse, Honour, ObjectizedFormerTeam, ObjectizedHonour,
} from '../../models/foottyAPI/foottyAPI-player.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';

export const getFormerTeamsActionCreator = createAsyncActionCreator(GET_FORMER_TEAMS);
export const getHonoursActionCreator = createAsyncActionCreator(GET_HONOURS);

export function* getFormerTeams(action: GetFormerTeamsAction) {
  yield put(getFormerTeamsActionCreator.request());

  try {
    const response: GetFormerTeamsResponse = yield call(() => foottyAPIService.getFormerTeams(action.payload));
    const formerTeams: {[formerTeamId: string]: ObjectizedFormerTeam} = response.formerteams.reduce((acc: {[formerTeamId: string]: ObjectizedFormerTeam}, formerTeam: FormerTeam) => {
      return {
        ...acc,
        [formerTeam.id]: {
          playerId: formerTeam.idPlayer,
          teamId: formerTeam.idFormerTeam,
          strFormerTeam: formerTeam.strFormerTeam,
          strTeamBadge: formerTeam.strTeamBadge ? formerTeam.strTeamBadge : null,
          strJoined: formerTeam.strJoined,
          strDeparted: formerTeam.strDeparted
        }
      };
    }, {});

    yield put(getFormerTeamsActionCreator.success(formerTeams));
  } catch (error) {
    yield put(getFormerTeamsActionCreator.fail());
  }
}

export function* getHonours(action: GetHonoursAction) {
  yield put(getHonoursActionCreator.request());

  try {
    const response: GetHonoursResponse = yield call(() => foottyAPIService.getHonours(action.payload));
    const honours: {[honourId: string]: ObjectizedHonour} = response.honors.reduce((acc: {[honourId: string]: ObjectizedHonour}, honour: Honour) => {
      return {
        ...acc,
        [honour.id]: {
          playerId: honour.idPlayer,
          teamId: honour.idTeam,
          strPlayer: honour.strPlayer,
          strTeam: honour.strTeam,
          strHonour: honour.strHonour,
          strSeason: honour.strSeason,
        }
      };
    }, {});

    yield put(getHonoursActionCreator.success(honours));
  } catch (error) {
    yield put(getHonoursActionCreator.fail());
  }
}


export default function* foottyAPIPlayerSaga() {
  yield all([
    takeLatest(GET_FORMER_TEAMS.INDEX as any, getFormerTeams),
    takeLatest(GET_HONOURS.INDEX as any, getHonours),
  ])
};