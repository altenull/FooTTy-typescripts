import {combineReducers, Reducer} from 'redux';

import {reducer as CoreReducer} from './coreModule/core';
import {CoreState} from './coreModule/model';

export interface RootState {
  core: CoreState;
}

export const RootReducer: Reducer<RootState> = combineReducers<RootState>({
  core: CoreReducer
});