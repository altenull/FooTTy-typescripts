import {createStore, applyMiddleware, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {History} from 'history';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import {RootState, rootReducer} from './modules';
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export default function configure(history: History, initialState: RootState): Store<RootState> {
  const composeEnhancers: any = composeWithDevTools({});

  return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      )),
  );
}

export function startSaga() {
  sagaMiddleware.run(rootSaga);
}