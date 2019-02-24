import {call, takeLatest, all, put} from 'redux-saga/effects';
import {createAsyncActionCreator} from '../../../lib/functions/sagaAction';
import {
  GET_ALL_PLAYERS_IN_TEAM
} from '../../modules/foottyAPI/foottyAPI-team.module';
import {
  GetAllPlayersInTeamAction,
  GetAllPlayersInTeamResponse,
  ObjectizedPlayerInTeam,
  Player
} from '../../models/foottyAPI/foottyAPI-team.model';
import foottyAPIService from '../../../services/foottyAPI/foottyAPI.service';

export const getAllPlayersInTeamAsyncActionCreator = createAsyncActionCreator(GET_ALL_PLAYERS_IN_TEAM);

export function* getAllPlayersInTeam(action: GetAllPlayersInTeamAction) {
  yield put(getAllPlayersInTeamAsyncActionCreator.request());

  try {
    const response: GetAllPlayersInTeamResponse = yield call(() => foottyAPIService.getAllPlayersInTeam(action.payload));
    const players: { [playerId: string]: ObjectizedPlayerInTeam } = response.player.reduce((acc: { [playerId: string]: ObjectizedPlayerInTeam }, player: Player, index: number) => {
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
        }
      };
    }, {});

    yield put(getAllPlayersInTeamAsyncActionCreator.success(players));
  } catch (error) {
    yield put(getAllPlayersInTeamAsyncActionCreator.fail());
  }
}

export default function* foottyAPITeamSaga() {
  yield all([
    takeLatest(GET_ALL_PLAYERS_IN_TEAM.INDEX as any, getAllPlayersInTeam)
  ])
}