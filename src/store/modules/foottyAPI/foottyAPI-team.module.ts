import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {createAsyncActionTypes} from '../../../lib/functions/sagaAction';
import {FoottyAPITeamActionCreators, FoottyAPITeamState} from '../../models/foottyAPI/foottyAPI-team.model';

const RESET_FOOTTY_API_TEAM = '@@foottyAPI-team/RESET_FOOTTY_API_TEAM';
export const GET_ALL_PLAYERS_IN_TEAM = createAsyncActionTypes('@@foottyAPI-team/GET_ALL_PLAYERS_IN_TEAM');
export const GET_NEXT_5_EVENTS = createAsyncActionTypes('@@foottyAPI-team/GET_NEXT_5_EVENTS');

export const actionCreators: FoottyAPITeamActionCreators = {
  resetFoottyAPITeam: createAction(RESET_FOOTTY_API_TEAM),
  getAllPlayersInTeam: createAction(GET_ALL_PLAYERS_IN_TEAM.INDEX),
  getAllPlayersInTeamRequest: createAction(GET_ALL_PLAYERS_IN_TEAM.REQUEST),
  getAllPlayersInTeamComplete: createAction(GET_ALL_PLAYERS_IN_TEAM.SUCCESS),
  getAllPlayersInTeamFail: createAction(GET_ALL_PLAYERS_IN_TEAM.FAIL),
  getNext5Events: createAction(GET_NEXT_5_EVENTS.INDEX),
  getNext5EventsRequest: createAction(GET_NEXT_5_EVENTS.REQUEST),
  getNext5EventsComplete: createAction(GET_NEXT_5_EVENTS.SUCCESS),
  getNext5EventsFail: createAction(GET_NEXT_5_EVENTS.FAIL),
};

export const initialState: FoottyAPITeamState = {
  allPlayersInTeam: null,
  next5Events: null,
  isGetAllPlayersInTeamLoading: false,
  isGetAllPlayersInTeamLoaded: false,
  getAllPlayersInTeamError: null,
  isGetNext5EventsLoading: false,
  isGetNext5EventsLoaded: false,
  getNext5EventsError: null,
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
    },
    [GET_NEXT_5_EVENTS.REQUEST]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.next5Events = null;
        draft.isGetNext5EventsLoading = true;
        draft.isGetNext5EventsLoaded = false;
      });
    },
    [GET_NEXT_5_EVENTS.SUCCESS]: (state: FoottyAPITeamState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.next5Events = action.payload as any;
        }
        draft.isGetNext5EventsLoading = false;
        draft.isGetNext5EventsLoaded = true;
      });
    },
    [GET_NEXT_5_EVENTS.FAIL]: (state: FoottyAPITeamState) => {
      return produce(state, (draft) => {
        draft.isGetNext5EventsLoading = false;
      });
    },
  },
  initialState
);