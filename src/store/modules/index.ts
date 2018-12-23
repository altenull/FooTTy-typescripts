import {combineReducers, Reducer} from 'redux';

// State
import {CoreState} from '../models/core/core.model';
import {FoottyAPIState} from '../models/foottyAPI/foottyAPI.model';
import {LeagueState} from '../models/league/league.model';

// Reducer
import {reducer as coreReducer} from './core/core.module';
import {reducer as foottyAPIReducer} from './foottyAPI/foottyAPI.module';
import {reducer as leagueReducer} from './league/league.module';

export interface RootState {
  core: CoreState;
  foottyAPI: FoottyAPIState;
  league: LeagueState;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  core: coreReducer,
  foottyAPI: foottyAPIReducer,
  league: leagueReducer
});