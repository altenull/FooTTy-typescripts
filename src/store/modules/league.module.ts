import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {LeagueActionCreators, LeagueState} from '../models/league.model';
import {createAsyncActionTypes} from '../../lib/functions/asyncAction';

const RESET_LEAGUE = '@@league/RESET_LEAGUE';
export const GET_LEAGUE_SEASONS = createAsyncActionTypes('@@league/GET_LEAGUE_SEASONS');
export const GET_LEAGUE_TABLE = createAsyncActionTypes('@@league/GET_LEAGUE_TABLE');
export const GET_ALL_TEAMS_IN_LEAGUE = createAsyncActionTypes('@@league/GET_ALL_TEAMS_IN_LEAGUE');
const SET_SELECTED_SEASON = '@@league/SET_SELECTED_SEASON';

export const actionCreators: LeagueActionCreators = {
  resetLeague: createAction(RESET_LEAGUE),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS.INDEX),
  getLeagueSeasonsRequest: createAction(GET_LEAGUE_SEASONS.REQUEST),
  getLeagueSeasonsComplete: createAction(GET_LEAGUE_SEASONS.SUCCESS),
  getLeagueSeasonsFail: createAction(GET_LEAGUE_SEASONS.FAIL),
  getLeagueTable: createAction(GET_LEAGUE_TABLE.INDEX),
  getLeagueTableRequest: createAction(GET_LEAGUE_TABLE.REQUEST),
  getLeagueTableComplete: createAction(GET_LEAGUE_TABLE.SUCCESS),
  getLeagueTableFail: createAction(GET_LEAGUE_TABLE.FAIL),
  getAllTeamsInLeague: createAction(GET_ALL_TEAMS_IN_LEAGUE.INDEX),
  getAllTeamsInLeagueRequest: createAction(GET_ALL_TEAMS_IN_LEAGUE.REQUEST),
  getAllTeamsInLeagueComplete: createAction(GET_ALL_TEAMS_IN_LEAGUE.SUCCESS),
  getAllTeamsInLeagueFail: createAction(GET_ALL_TEAMS_IN_LEAGUE.FAIL),
  setSelectedSeason: createAction(SET_SELECTED_SEASON)
};

const initialState: LeagueState = {
  selectedSeason: '',
  seasons: [],
  allTeamsInLeague: null,
  leagueTable: null,
  isGetSeasonsLoading: false,
  isGetSeasonsLoaded: false,
  getSeasonsError: null,
  isGetLeagueTableLoading: false,
  isGetLeagueTableLoaded: false,
  getLeagueTableError: null,
  isGetAllTeamsInLeagueLoading: false,
  isGetAllTeamsInLeagueLoaded: false,
  getAllTeamsInLeagueError: null
};

export const reducer: Reducer<LeagueState> = handleActions(
  {
    [RESET_LEAGUE]: () => initialState,
    [GET_LEAGUE_SEASONS.REQUEST]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetSeasonsLoading = true;
        draft.isGetSeasonsLoaded = false;
      });
    },
    [GET_LEAGUE_SEASONS.SUCCESS]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.seasons = action.payload as any;
          draft.selectedSeason = action.payload[0]; // [0] is latest season
        }
        draft.isGetSeasonsLoading = false;
        draft.isGetSeasonsLoaded = true;
      });
    },
    [GET_LEAGUE_SEASONS.FAIL]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetSeasonsLoading = false;
      });
    },
    [GET_LEAGUE_TABLE.REQUEST]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetLeagueTableLoading = true;
        draft.isGetLeagueTableLoaded = false;
      });
    },
    [GET_LEAGUE_TABLE.SUCCESS]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.leagueTable = action.payload as any;
        }
        draft.isGetLeagueTableLoading = false;
        draft.isGetLeagueTableLoaded = true;
      });
    },
    [GET_LEAGUE_TABLE.FAIL]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetLeagueTableLoading = false;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.REQUEST]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetAllTeamsInLeagueLoading = true;
        draft.isGetAllTeamsInLeagueLoaded = false;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.SUCCESS]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.allTeamsInLeague = action.payload as any;
        }
        draft.isGetAllTeamsInLeagueLoading = false;
        draft.isGetAllTeamsInLeagueLoaded = true;
      });
    },
    [GET_ALL_TEAMS_IN_LEAGUE.FAIL]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetAllTeamsInLeagueLoading = false;
      });
    },
    [SET_SELECTED_SEASON]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.selectedSeason = action.payload.selectedSeason as any;
        }
      })
    }
  },
  initialState
);