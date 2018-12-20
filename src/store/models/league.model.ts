import {ActionType} from './shared.model';
import {GetAllTeamsInLeaguePayload, GetLeagueSeasonsPayload, GetLeagueTablePayload} from '../../services/league/models';

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
  getAllTeamsInLeague(payload: any): any;
  getAllTeamsInLeagueRequest(): any;
  getAllTeamsInLeagueComplete(): any;
  getAllTeamsInLeagueFail(): any;
  setSelectedSeason(payload: SetSelectedSeasonPayload): any;
}

// TODO:
export interface LeagueState {
  selectedSeason: string;
  seasons: string[];
  allTeamsInLeague: null;
  isGetSeasonsLoading: boolean;
  isGetSeasonsLoaded: boolean;
  getSeasonsError: string | null;
  leagueTable: {[teamId: string]: ObjectizedLeagueTable} | null;
  isGetLeagueTableLoading: boolean;
  isGetLeagueTableLoaded: boolean;
  getLeagueTableError: string | null;
  isGetAllTeamsInLeagueLoading: boolean;
  isGetAllTeamsInLeagueLoaded: boolean;
  getAllTeamsInLeagueError: string | null;
}

export interface SetSelectedSeasonPayload {
  selectedSeason: string;
}

// Redux-Saga
export interface GetLeagueSeasonsAction extends ActionType {
  payload: GetLeagueSeasonsPayload;
}
export interface GetLeagueTableAction extends ActionType {
  payload: GetLeagueTablePayload;
}
export interface GetAllTeamsInLeagueAction extends ActionType {
  payload: GetAllTeamsInLeaguePayload;
}

export interface LeagueSeason {
  strSeason: string;
}
export interface GetLeagueSeasonsResponse {
  leagues: LeagueSeason[];
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
export interface ObjectizedLeagueTable {
  name: string;
  rank: number;
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

// allTeamsInLeague

export interface TeamInLeague {
  idLeague: string;
  idSoccerXML: string;
  idTeam: string;
  intFormedYear: string;
  intLoved: string | null;
  intStadiumCapacity: string | null;
  strAlternate: string;
  strCountry: string | null;
  strDescriptionCN: string | null;
  strDescriptionDE: string | null;
  strDescriptionEN: string | null;
  strDescriptionES: string | null;
  strDescriptionFR: string | null;
  strDescriptionHU: string | null;
  strDescriptionIL: string | null;
  strDescriptionIT: string | null;
  strDescriptionJP: string | null;
  strDescriptionNL: string | null;
  strDescriptionNO: string | null;
  strDescriptionPL: string | null;
  strDescriptionPT: string | null;
  strDescriptionRU: string | null;
  strDescriptionSE: string | null;
  strDivision: string | null;
  strFacebook: string;
  strGender: string | null;
  strInstagram: string;
  strKeywords: string;
  strLeague: string | null;
  strLocked: string | null;
  strManager: string | null;
  strRSS: string;
  strSport: string | null;
  strStadium: string | null;
  strStadiumDescription: string | null;
  strStadiumLocation: string | null;
  strStadiumThumb: string | null;
  strTeam: string | null;
  strTeamBadge: string | null;
  strTeamBanner: string | null;
  strTeamFanart1: string | null;
  strTeamFanart2: string | null;
  strTeamFanart3: string | null;
  strTeamFanart4: string | null;
  strTeamJersey: string | null;
  strTeamLogo: string | null;
  strTeamShort: string | null;
  strTwitter: string;
  strWebsite: string;
  strYoutube: string;
}

export interface ObjectizedTeamInLeague {
  formedYear: string | null;
  stadiumCapacity: string | null;
  facebookUrl: string | null;
  instagramUrl: string | null;
  twitterUrl: string | null;
  youtubeUrl: string | null;
  websiteUrl: string | null;
  badgeUrl: string | null;
}

export interface GetAllTeamsInLeagueResponse {
  teams: TeamInLeague[]
}