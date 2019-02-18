import {ActionType} from '../shared/shared.model';
import {
  GetAllTeamsInLeaguePayload,
  GetLeagueSeasonsPayload,
  GetLeagueTablePayload,
  GetNextEventsPayload
} from '../../../services/foottyAPI/models';

// Redux
export interface FoottyAPILeagueActionCreators {
  resetFoottyAPILeague(): any;
  getAllTeamsInLeague(payload: GetAllTeamsInLeaguePayload): any;
  getAllTeamsInLeagueRequest(): any;
  getAllTeamsInLeagueComplete(): any;
  getAllTeamsInLeagueFail(): any;
  getLeagueSeasons(payload: GetLeagueSeasonsPayload): any;
  getLeagueSeasonsRequest(): any;
  getLeagueSeasonsComplete(): any;
  getLeagueSeasonsFail(): any;
  getLeagueTable(payload: GetLeagueTablePayload): any;
  getLeagueTableRequest(): any;
  getLeagueTableComplete(): any;
  getLeagueTableFail(): any;
  getNextEvents(payload: GetNextEventsPayload): any;
  getNextEventsRequest(): any;
  getNextEventsComplete(): any;
  getNextEventsFail(): any;
}

export interface FoottyAPILeagueState {
  allTeamsInLeague: {[teamId: string]: ObjectizedTeamInLeague} | null;
  seasons: string[];
  leagueTable: {[teamId: string]: ObjectizedLeagueTable} | null;
  nextEvents: {[eventId: string]: ObjectizedEventInLeague} | null;
  isGetAllTeamsInLeagueLoading: boolean;
  isGetAllTeamsInLeagueLoaded: boolean;
  getAllTeamsInLeagueError: string | null;
  isGetSeasonsLoading: boolean;
  isGetSeasonsLoaded: boolean;
  getSeasonsError: string | null;
  isGetLeagueTableLoading: boolean;
  isGetLeagueTableLoaded: boolean;
  getLeagueTableError: string | null;
  isGetNextEventsLoading: boolean;
  isGetNextEventsLoaded: boolean;
  getNextEventsError: string | null;
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
export interface GetNextEventsAction extends ActionType {
  payload: GetNextEventsPayload;
}

export interface LeagueSeason {
  strSeason: string;
}
export interface GetLeagueSeasonsResponse {
  seasons: LeagueSeason[];
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

export interface EventInLeague {
  idEvent: string;
  idSoccerXML: string;
  strEvent: string;
  strFilename: string;
  strSport: string;
  idLeague: string;
  strLeague: string;
  strSeason: string;
  strDescriptionEN: string | null;
  strHomeTeam: string;
  strAwayTeam: string;
  intHomeScore: string | null;
  intRound: string;
  intAwayScore: string | null;
  intSpectators: string | null;
  strHomeGoalDetails: string | null;
  strHomeRedCards: string | null;
  strHomeYellowCards: string | null;
  strHomeLineupGoalkeeper: string | null;
  strHomeLineupDefense: string | null;
  strHomeLineupMidfield: string | null;
  strHomeLineupForward: string | null;
  strHomeLineupSubstitutes: string | null;
  strHomeFormation: string | null;
  strAwayRedCards: string | null;
  strAwayYellowCards: string | null;
  strAwayGoalDetails: string | null;
  strAwayLineupGoalkeeper: string | null;
  strAwayLineupDefense: string | null;
  strAwayLineupMidfield: string | null;
  strAwayLineupForward: string | null;
  strAwayLineupSubstitutes: string | null;
  strAwayFormation: string | null;
  intHomeShots: string | null;
  intAwayShots: string | null;
  dateEvent: string;
  strDate: string;
  strTime: string;
  strTVStation: string | null;
  idHomeTeam: string;
  idAwayTeam: string;
  strResult: string | null;
  strCircuit: string | null;
  strCountry: string | null;
  strCity: string | null;
  strPoster: string | null;
  strFanart: string | null;
  strThumb: string | null;
  strBanner: string | null;
  strMap: string | null;
  strLocked: string;
}
export interface ObjectizedEventInLeague {
  strEvent: string;
  strHomeTeam: string
  strAwayTeam: string;
  intRound: string;
  dateEvent: string;
  strDate: string;
  strTime: string;
  idHomeTeam: string;
  idAwayTeam: string;
}
export interface GetNextEventsResponse {
  events: EventInLeague[];
}