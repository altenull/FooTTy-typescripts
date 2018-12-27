import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {createAsyncActionTypes} from '../../../lib/functions/sagaAction';
import {FoottyAPILeagueActionCreators, FoottyAPILeagueState} from '../../models/foottyAPI/foottyAPI-league.model';

const RESET_FOOTTY_API_LEAGUE = '@@foottyAPI-league/RESET_FOOTTY_API_LEAGUE';
export const GET_ALL_TEAMS_IN_LEAGUE = createAsyncActionTypes('@@foottyAPI-league/GET_ALL_TEAMS_IN_LEAGUE');
export const GET_LEAGUE_SEASONS = createAsyncActionTypes('@@foottyAPI-league/GET_LEAGUE_SEASONS');
export const GET_LEAGUE_TABLE = createAsyncActionTypes('@@foottyAPI-league/GET_LEAGUE_TABLE');
export const GET_NEXT_EVENTS = createAsyncActionTypes('@@foottyAPI-league/GET_NEXT_EVENTS');

export const actionCreators: FoottyAPILeagueActionCreators = {
  resetFoottyAPILeague: createAction(RESET_FOOTTY_API_LEAGUE),
  getAllTeamsInLeague: createAction(GET_ALL_TEAMS_IN_LEAGUE.INDEX),
  getAllTeamsInLeagueRequest: createAction(GET_ALL_TEAMS_IN_LEAGUE.REQUEST),
  getAllTeamsInLeagueComplete: createAction(GET_ALL_TEAMS_IN_LEAGUE.SUCCESS),
  getAllTeamsInLeagueFail: createAction(GET_ALL_TEAMS_IN_LEAGUE.FAIL),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS.INDEX),
  getLeagueSeasonsRequest: createAction(GET_LEAGUE_SEASONS.REQUEST),
  getLeagueSeasonsComplete: createAction(GET_LEAGUE_SEASONS.SUCCESS),
  getLeagueSeasonsFail: createAction(GET_LEAGUE_SEASONS.FAIL),
  getLeagueTable: createAction(GET_LEAGUE_TABLE.INDEX),
  getLeagueTableRequest: createAction(GET_LEAGUE_TABLE.REQUEST),
  getLeagueTableComplete: createAction(GET_LEAGUE_TABLE.SUCCESS),
  getLeagueTableFail: createAction(GET_LEAGUE_TABLE.FAIL),
  getNextEvents: createAction(GET_NEXT_EVENTS.INDEX),
  getNextEventsRequest: createAction(GET_NEXT_EVENTS.REQUEST),
  getNextEventsComplete: createAction(GET_NEXT_EVENTS.SUCCESS),
  getNextEventsFail: createAction(GET_NEXT_EVENTS.FAIL)
};

export const initialState: FoottyAPILeagueState = {
  allTeamsInLeague: null,
  seasons: [],
  leagueTable: null,
  nextEvents: null,
  isGetSeasonsLoading: false,
  isGetSeasonsLoaded: false,
  getSeasonsError: null,
  isGetLeagueTableLoading: false,
  isGetLeagueTableLoaded: false,
  getLeagueTableError: null,
  isGetAllTeamsInLeagueLoading: false,
  isGetAllTeamsInLeagueLoaded: false,
  getAllTeamsInLeagueError: null,
  isGetNextEventsLoading: false,
  isGetNextEventsLoaded: false,
  getNextEventsError: null
};

export const reducer: Reducer<FoottyAPILeagueState> = handleActions(
  {
    [RESET_FOOTTY_API_LEAGUE]: () => initialState,
    [GET_ALL_TEAMS_IN_LEAGUE.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetAllTeamsInLeagueLoading = true;
        draft.isGetAllTeamsInLeagueLoaded = false;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allTeamsInLeague = action.payload as any;
        }
        draft.isGetAllTeamsInLeagueLoading = false;
        draft.isGetAllTeamsInLeagueLoaded = true;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.FAIL]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetAllTeamsInLeagueLoading = false;
      });
    },
    [GET_LEAGUE_SEASONS.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetSeasonsLoading = true;
        draft.isGetSeasonsLoaded = false;
      });
    },
    [GET_LEAGUE_SEASONS.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.seasons = action.payload as any;
        }
        draft.isGetSeasonsLoading = false;
        draft.isGetSeasonsLoaded = true;
      });
    },
    [GET_LEAGUE_SEASONS.FAIL]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetSeasonsLoading = false;
      });
    },
    [GET_LEAGUE_TABLE.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetLeagueTableLoading = true;
        draft.isGetLeagueTableLoaded = false;
      });
    },
    [GET_LEAGUE_TABLE.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueTable = action.payload as any;
        }
        draft.isGetLeagueTableLoading = false;
        draft.isGetLeagueTableLoaded = true;
      });
    },
    [GET_LEAGUE_TABLE.FAIL]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetLeagueTableLoading = false;
      });
    },
    [GET_NEXT_EVENTS.REQUEST]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetNextEventsLoading = true;
        draft.isGetNextEventsLoaded = false;
      });
    },
    [GET_NEXT_EVENTS.SUCCESS]: (state: FoottyAPILeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.nextEvents = action.payload as any;
        }
        draft.isGetNextEventsLoading = false;
        draft.isGetNextEventsLoaded = true;
      });
    },
    [GET_NEXT_EVENTS.FAIL]: (state: FoottyAPILeagueState) => {
      return produce(state, (draft) => {
        draft.isGetNextEventsLoading = false;
      });
    }
  },
  initialState
);