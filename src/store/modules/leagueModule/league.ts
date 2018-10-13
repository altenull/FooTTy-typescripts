import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
// import produce from 'immer';
import {LeagueActionCreators, LeagueState} from './models';
import LeagueService from '../../../services/league/league.service';
import {GetLeagueSeasonsPayload} from '../../../services/league/models';

const INITIALIZE_LEAGUE = '@@league/INITIALIZE_LEAGUE';
const GET_LEAGUE_SEASONS = '@@league/GET_LEAGUE_SEASONS';

export const actionCreators: LeagueActionCreators = {
  initializeLeague: createAction(INITIALIZE_LEAGUE),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS, (payload: GetLeagueSeasonsPayload) => LeagueService.getLeagueSeasons(payload))
};

const initialState: LeagueState = {
  selectedLeague: '',
  seasons: []
};

export const reducer: Reducer<LeagueState> = handleActions(
    {
      [INITIALIZE_LEAGUE]: () => initialState
      // [GET_LEAGUE_SEASONS]: (state: LeagueState) =>
    },
    initialState
);