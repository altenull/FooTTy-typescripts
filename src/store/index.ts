import configure from './configure';
import {CoreState} from './modules/coreModule/model';

const store = configure();

export default store;

export interface StoreState {
  core: CoreState;
}