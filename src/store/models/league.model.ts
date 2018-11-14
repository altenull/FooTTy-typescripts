import {ActionType} from './shared.model';
import {GetLeagueSeasonsPayload} from '../../services/league/models';

// Redux
export interface LeagueActionCreators {
  initializeLeague(): any;
  getLeagueSeasons(payload: GetLeagueSeasonsPayload): any;
  getLeagueSeasonsRequest(): any;
  getLeagueSeasonsComplete(): any;
  getLeagueSeasonsFail(): any;
}

export interface LeagueState {
  selectedLeague: string;
  seasons: string[];
  isGetSeasonsLoading: boolean;
  isGetSeasonsLoaded: boolean;
  getSeasonsError: string | null;
}

// Redux-Saga
export interface GetLeagueSeasonsAction extends ActionType {
  payload: GetLeagueSeasonsPayload;
}