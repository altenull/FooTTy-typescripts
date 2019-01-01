import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {createAsyncActionTypes} from '../../../lib/functions/sagaAction';
import {FoottyAPITeamActionCreators, FoottyAPITeamState} from '../../models/foottyAPI/foottyAPI-team.model';

const RESET_FOOTTY_API_TEAM = '@@foottyAPI-team/RESET_FOOTTY_API_TEAM';
export const GET_ALL_PLAYERS_IN_TEAM = createAsyncActionTypes('@@foottyAPI-team/GET_ALL_PLAYERS_IN_TEAM');

export const actionCreators: FoottyAPITeamActionCreators = {
  resetFoottyAPITeam: createAction(RESET_FOOTTY_API_TEAM),
  getAllPlayersInTeam: createAction(GET_ALL_PLAYERS_IN_TEAM.INDEX),
  getAllPlayersInTeamRequest: createAction(GET_ALL_PLAYERS_IN_TEAM.REQUEST),
  getAllPlayersInTeamComplete: createAction(GET_ALL_PLAYERS_IN_TEAM.SUCCESS),
  getAllPlayersInTeamFail: createAction(GET_ALL_PLAYERS_IN_TEAM.FAIL)
};

export const initialState: FoottyAPITeamState = {
  allPlayersInTeam: null,
  isGetAllPlayersInTeamLoading: false,
  isGetAllPlayersInTeamLoaded: false,
  getAllPlayersInTeamError: null
};

export const reducer: Reducer<FoottyAPITeamState> = handleActions(
  {
    [RESET_FOOTTY_API_TEAM]: () => initialState,
    [GET_ALL_PLAYERS_IN_TEAM.REQUEST]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.allPlayersInTeam = null;
        draft.isGetAllPlayersInTeamLoading = true;
        draft.isGetAllPlayersInTeamLoaded = false;
      });
    },
    [GET_ALL_PLAYERS_IN_TEAM.SUCCESS]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allPlayersInTeam = action.payload as any;
        }
        draft.isGetAllPlayersInTeamLoading = false;
        draft.isGetAllPlayersInTeamLoaded = true;
      });
    },
    [GET_ALL_PLAYERS_IN_TEAM.FAIL]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.isGetAllPlayersInTeamLoading = false;
      });
    }
  },
  initialState
);