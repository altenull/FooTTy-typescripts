import {combineReducers, Reducer} from 'redux';
import {FoottyAPIActionCreators, FoottyAPIState} from '../../models/foottyAPI/foottyAPI.model';

import {
  actionCreators as foottyAPILeagueActionCreators,
  reducer as foottyAPILeagueReducer
} from './foottyAPI-league.module';
import {
  actionCreators as foottyAPITeamActionCreators,
  reducer as foottyAPITeamReducer
} from './foottyAPI-team.module';

export const actionCreators: FoottyAPIActionCreators = {
  ...foottyAPILeagueActionCreators,
  ...foottyAPITeamActionCreators
};

export const reducer: Reducer<FoottyAPIState> = combineReducers<FoottyAPIState>({
  foottyAPILeague: foottyAPILeagueReducer,
  foottyAPITeam: foottyAPITeamReducer
});