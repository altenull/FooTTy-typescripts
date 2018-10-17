import {combineReducers, Reducer} from 'redux';

import {reducer as CoreReducer} from './core.module';
import {reducer as LeagueReducer} from './league.module';
import {CoreState} from '../models/core.model';
import {LeagueState} from '../models/league.model';

export interface RootState {
  core: CoreState;
  league: LeagueState;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  core: CoreReducer,
  league: LeagueReducer
});