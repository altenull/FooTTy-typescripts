import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
import produce from 'immer';
import {LeagueActionCreators, LeagueState} from '../models/league.model';
import {GetLeagueSeasonsPayload} from '../../services/league/models';
import {getLeagueSeasons} from '../sagas/league.saga';

const INITIALIZE_LEAGUE = '@@league/INITIALIZE_LEAGUE';
export const GET_LEAGUE_SEASONS = '@@league/GET_LEAGUE_SEASONS';
// export const COMPLETE_GET_LEAGUE_SEASONS = '@@league/COMPLETE_GET_LEAGUE_SEASONS';

export const actionCreators: LeagueActionCreators = {
  initializeLeague: createAction(INITIALIZE_LEAGUE),
  getLeagueSeasons: createAction(GET_LEAGUE_SEASONS, (payload: GetLeagueSeasonsPayload) => getLeagueSeasons(payload)),
  // completeGetLeagueSeasons: createAction(COMPLETE_GET_LEAGUE_SEASONS, (payload:))
};

const initialState: LeagueState = {
  selectedLeague: '',
  seasons: []
};

export const reducer: Reducer<LeagueState> = handleActions(
    {
      [INITIALIZE_LEAGUE]: () => initialState,
      [GET_LEAGUE_SEASONS]: (state: LeagueState, {payload}: any) => {
        console.log('payload');
        console.log(payload);
        return produce(state, (draft) => {
          draft.seasons = payload;
        });
      }
    },
    initialState
);