import {bindActionCreators} from 'redux';
import store from './index';
import {actionCreators as leagueActions} from './modules/leagueModule/league';
import {LeagueActionCreators} from './modules/leagueModule/models';

const {dispatch} = store;

// TODO: Search bindActionCreators type
export const LeagueActions: LeagueActionCreators = bindActionCreators<any, any>(leagueActions, dispatch);