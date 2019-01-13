import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {createAsyncActionTypes} from '../../../lib/functions/sagaAction';
import {FoottyAPIPlayerActionCreators, FoottyAPIPlayerState} from '../../models/foottyAPI/foottyAPI-player.model';

const RESET_FOOTTY_API_PLAYER = '@@foottyAPI-player/RESET_FOOTTY_API_PLAYER';
export const GET_FORMER_TEAMS = createAsyncActionTypes('@@foottyAPI-player/GET_FORMER_TEAMS');

export const actionCreators: FoottyAPIPlayerActionCreators = {
  resetFoottyAPIPlayer: createAction(RESET_FOOTTY_API_PLAYER),
  getFormerTeams: createAction(GET_FORMER_TEAMS.INDEX),
  getFormerTeamsRequest: createAction(GET_FORMER_TEAMS.REQUEST),
  getFormerTeamsComplete: createAction(GET_FORMER_TEAMS.SUCCESS),
  getFormerTeamsFail: createAction(GET_FORMER_TEAMS.FAIL),
};

export const initialState: FoottyAPIPlayerState = {
  formerTeams: null,
  isGetFormerTeamsLoading: false,
  isGetFormerTeamsLoaded: false,
  getFormerTeamsError: null,
};

export const reducer: Reducer<FoottyAPIPlayerState> = handleActions(
  {
    [RESET_FOOTTY_API_PLAYER]: () => initialState,
    [GET_FORMER_TEAMS.REQUEST]: (state: FoottyAPIPlayerState) => {
      return produce(state, (draft) => {
        draft.formerTeams = null;
        draft.isGetFormerTeamsLoading = true;
        draft.isGetFormerTeamsLoaded = false;
      });
    },
    [GET_FORMER_TEAMS.SUCCESS]: (state: FoottyAPIPlayerState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.formerTeams = action.payload as any;
        }
        draft.isGetFormerTeamsLoading = false;
        draft.isGetFormerTeamsLoaded = true;
      });
    },
    [GET_FORMER_TEAMS.FAIL]: (state: FoottyAPIPlayerState) => {
      return produce(state, (draft) => {
        draft.isGetFormerTeamsLoading = false;
      });
    }
  },
  initialState
);