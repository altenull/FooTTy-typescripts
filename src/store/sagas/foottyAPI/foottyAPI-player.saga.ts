import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator} from '../../../lib/functions/sagaAction';
import {GET_FORMER_TEAMS} from '../../modules/foottyAPI/foottyAPI-player.module';
import {
  FormerTeam,
  GetFormerTeamsAction,
  GetFormerTeamsResponse, ObjectizedFormerTeam,
} from '../../models/foottyAPI/foottyAPI-player.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';

export const getFormerTeamsActionCreator = createAsyncActionCreator(GET_FORMER_TEAMS);

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

export default function* foottyAPIPlayerSaga() {
  yield all([
    takeLatest(GET_FORMER_TEAMS.INDEX as any, getFormerTeams)
  ])
};