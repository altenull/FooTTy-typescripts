import {GetLeagueSeasonsPayload} from '../../../services/league/models';

export interface LeagueActionCreators {
  initializeLeague(): any;
  getLeagueSeasons(payload: GetLeagueSeasonsPayload): any;
}

export interface LeagueState {
  selectedLeague: string;
  seasons: string[];
}