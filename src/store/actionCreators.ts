import {bindActionCreators} from 'redux';
import store from './index';

// Action Creators Model
import {FoottyAPIActionCreators} from './models/foottyAPI/foottyAPI.model';

// Action Creators
import {actionCreators as foottyAPIActions} from './modules/foottyAPI/foottyAPI.module';

const {dispatch} = store;

// TODO: Search bindActionCreators type
export const FoottyAPIActions: FoottyAPIActionCreators = bindActionCreators<any, any>(foottyAPIActions, dispatch);