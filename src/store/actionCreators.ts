import {bindActionCreators} from 'redux';
import store from './index';

// Action Creators Model
import {FoottyAPIActionCreators} from './models/foottyAPI/foottyAPI.model';
import {LeagueActionCreators} from './models/league/league.model';

// Action Creators
import {actionCreators as foottyAPIActions} from './modules/foottyAPI/foottyAPI.module';
import {actionCreators as leagueActions} from './modules/league/league.module';

const {dispatch} = store;

// TODO: Search bindActionCreators type
export const FoottyAPIActions: FoottyAPIActionCreators = bindActionCreators<any, any>(foottyAPIActions, dispatch);
export const LeagueActions: LeagueActionCreators = bindActionCreators<any, any>(leagueActions, dispatch);