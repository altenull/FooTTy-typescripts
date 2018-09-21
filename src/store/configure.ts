import {createStore, Store} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {RootState, RootReducer} from './modules';

const middleWares: any = []; // TODO: No need but used..

const configure = (preloadedState?: any): Store<RootState> => createStore(
  RootReducer,
  preloadedState,
  devToolsEnhancer(middleWares)
);

export default configure;