import {bindActionCreators} from 'redux';
import store from './index';
import {actionCreators as leagueActions} from './modules/league.module';
import {LeagueActionCreators} from './models/league.model';

const {dispatch} = store;

// TODO: Search bindActionCreators type
export const LeagueActions: LeagueActionCreators = bindActionCreators<any, any>(leagueActions, dispatch);