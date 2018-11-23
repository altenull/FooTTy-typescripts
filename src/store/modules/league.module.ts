import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {LeagueActionCreators, LeagueState} from '../models/league.model';
import {createAsyncActionTypes} from '../../lib/functions/asyncAction';

const INITIALIZE_LEAGUE = '@@league/INITIALIZE_LEAGUE';
export const GET_LEAGUE_SEASONS = createAsyncActionTypes('@@league/GET_LEAGUE_SEASONS');

export const actionCreators: LeagueActionCreators = {
  initializeLeague: createAction(INITIALIZE_LEAGUE),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS.INDEX),
  getLeagueSeasonsRequest: createAction(GET_LEAGUE_SEASONS.REQUEST),
  getLeagueSeasonsComplete: createAction(GET_LEAGUE_SEASONS.SUCCESS),
  getLeagueSeasonsFail: createAction(GET_LEAGUE_SEASONS.FAIL)
};

const initialState: LeagueState = {
  selectedLeague: '',
  seasons: [],
  isGetSeasonsLoading: false,
  isGetSeasonsLoaded: false,
  getSeasonsError: null
};

export const reducer: Reducer<LeagueState> = handleActions(
  {
    [INITIALIZE_LEAGUE]: () => initialState,
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
        }
        draft.isGetSeasonsLoading = false;
        draft.isGetSeasonsLoaded = true;
      });
    },
    [GET_LEAGUE_SEASONS.FAIL]: (state: LeagueState) => {
      return produce(state, (draft) => {
        draft.isGetSeasonsLoading = false;
      });
    }
  },
  initialState
);