import {combineReducers, Reducer} from 'redux';

import {reducer as CoreReducer} from './coreModule/core';
import {reducer as LeagueReducer} from './leagueModule/league';
import {CoreState} from './coreModule/models';
import {LeagueState} from './leagueModule/models';

export interface RootState {
  core: CoreState;
  league: LeagueState;
}

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  core: CoreReducer,
  league: LeagueReducer
});