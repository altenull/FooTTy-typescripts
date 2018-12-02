import {ActionType} from './shared.model';
import {GetLeagueSeasonsPayload, GetLeagueTablePayload} from '../../services/league/models';

// Redux
export interface LeagueActionCreators {
  initializeLeague(): any;
  getLeagueSeasons(payload: GetLeagueSeasonsPayload): any;
  getLeagueSeasonsRequest(): any;
  getLeagueSeasonsComplete(): any;
  getLeagueSeasonsFail(): any;
  getLeagueTable(payload: GetLeagueTablePayload): any;
  getLeagueTableRequest(): any;
  getLeagueTableComplete(): any;
  getLeagueTableFail(): any;
  setSelectedSeason(payload: SetSelectedSeasonPayload): any;
}

export interface LeagueState {
  selectedSeason: string;
  seasons: string[];
  isGetSeasonsLoading: boolean;
  isGetSeasonsLoaded: boolean;
  getSeasonsError: string | null;
  leagueTable: LeagueTable[];
  isGetLeagueTableLoading: boolean;
  isGetLeagueTableLoaded: boolean;
  getLeagueTableError: string | null;
}

export interface SetSelectedSeasonPayload {
  selectedSeason: string;
}

// Redux-Saga
export interface GetLeagueSeasonsAction extends ActionType {
  payload: GetLeagueSeasonsPayload;
}

export interface LeagueSeason {
  strSeason: string;
}

export interface GetLeagueSeasonsResponse {
  leagues: LeagueSeason[];
}

export interface GetLeagueTableAction extends ActionType {
  payload: GetLeagueTablePayload;
}

export interface LeagueTable {
  name: string;
  teamid: string;
  played: number;
  goalsfor: number;
  goalsagainst: number;
  goalsdifference: number;
  win: number;
  draw: number;
  loss: number;
  total: number;
}

export interface GetLeagueTableResponse {
  table: LeagueTable[]
}