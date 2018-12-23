import {combineReducers, Reducer} from 'redux';
import {FoottyAPIActionCreators, FoottyAPIState} from '../../models/foottyAPI/foottyAPI.model';

import {
  actionCreators as foottyAPILeagueActionCreators,
  reducer as foottyAPILeagueReducer
} from './foottyAPI-league.module';

export const actionCreators: FoottyAPIActionCreators = {
  ...foottyAPILeagueActionCreators
};

export const reducer: Reducer<FoottyAPIState> = combineReducers<FoottyAPIState>({
  foottyAPILeague: foottyAPILeagueReducer
});