import {createAction, handleActions} from 'redux-actions'
import {Reducer} from 'redux';
import {LeagueActionCreators, LeagueState} from '../../models/league/league.model';
import produce from 'immer';

const RESET_LEAGUE = '@@league/RESET_LEAGUE';
export const SET_SELECTED_SEASON = '@@league/SET_SELECTED_SEASON';

export const actionCreators: LeagueActionCreators = {
  resetLeague: createAction(RESET_LEAGUE),
  setSelectedSeason: createAction(SET_SELECTED_SEASON)
};

export const initialState: LeagueState = {
  selectedSeason: ''
};

export const reducer: Reducer<LeagueState> = handleActions(
  {
    [RESET_LEAGUE]: () => initialState,
    [SET_SELECTED_SEASON]: (state: LeagueState, action) => {
      return produce(state, (draft) => {
        if (action.payload != null) {
          draft.selectedSeason = action.payload.selectedSeason;
        }
      })
    },
  },
  initialState
);
