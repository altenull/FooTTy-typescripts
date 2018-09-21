import {createAction, handleActions} from 'redux-actions';
import {Reducer} from 'redux';
// import produce from 'immer';
import {CoreActionCreators, CoreState} from './model';

const INITIALIZE_CORE = '@@core/INITIALIZE_CORE';

export const actionCreators: CoreActionCreators = {
  initializeCore: createAction(INITIALIZE_CORE)
};

const initialState: CoreState = {
  core: false
};

// TODO: action: any 부분.
export const reducer: Reducer<CoreState> = handleActions(
  {
    [INITIALIZE_CORE]: () => initialState
  },
  initialState
);