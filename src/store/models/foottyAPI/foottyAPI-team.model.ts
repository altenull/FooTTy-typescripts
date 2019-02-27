import {ActionType, SocialUrls} from '../shared/shared.model';
import {
  GetAllPlayersInTeamPayload,
  GetNext5EventsPayload
} from '../../../services/foottyAPI/models';

// Redux
export interface FoottyAPITeamActionCreators {
  resetFoottyAPITeam(): any;
  getAllPlayersInTeam(payload: GetAllPlayersInTeamPayload): any;
  getAllPlayersInTeamRequest(): any;
  getAllPlayersInTeamComplete(): any;
  getAllPlayersInTeamFail(): any;
  getNext5Events(payload: GetNext5EventsPayload): any;
  getNext5EventsRequest(): any;
  getNext5EventsComplete(): any;
  getNext5EventsFail(): any;
}

export interface FoottyAPITeamState {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
  next5Events: {[eventId: string]: ObjectizedEvent} | null;
  isGetAllPlayersInTeamLoading: boolean;
  isGetAllPlayersInTeamLoaded: boolean;
  getAllPlayersInTeamError: string | null;
  isGetNext5EventsLoading: boolean;
  isGetNext5EventsLoaded: boolean;
  getNext5EventsError: string | null;
}

// Redux-Saga
export interface GetAllPlayersInTeamAction extends ActionType {
  payload: GetAllPlayersInTeamPayload;
}
export interface GetNext5EventsAction extends ActionType {
  payload: GetNext5EventsPayload;
}

export interface Player {
  idPlayer: string;
  idTeam: string | null;
  idSoccerXML: string;
  idPlayerManager: string | null;
  strNationality: string;
  strPlayer: string;
  strTeam: string | null;
  strSport: string | null;
  intSoccerXMLTeamID: string | null;
  dateBorn: string | null;
  dateSigned: string | null;
  strSigning: string | null;
  strWage: string | null;
  strBirthLocation: string | null;
  strDescriptionEN: string | null;
  strDescriptionDE: string | null;
  strDescriptionFR: string | null;
  strDescriptionCN: string | null;
  strDescriptionIT: string | null;
  strDescriptionJP: string | null;
  strDescriptionRU: string | null;
  strDescriptionES: string | null;
  strDescriptionPT: string | null;
  strDescriptionSE: string | null;
  strDescriptionNL: string | null;
  strDescriptionHU: string | null;
  strDescriptionNO: string | null;
  strDescriptionIL: string | null;
  strDescriptionPL: string | null;
  strGender: string | null;
  strPosition: string | null;
  strCollege: string | null;
  strFacebook: string | null;
  strWebsite: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
  strYoutube: string | null;
  strHeight: string | null;
  strWeight: string | null;
  intLoved: string | null;
  strThumb: string | null;
  strCutout: string | null;
  strBanner: string | null;
  strFanart1: string | null;
  strFanart2: string | null;
  strFanart3: string | null;
  strFanart4: string | null;
  strLocked: string;
}
export interface GetAllPlayersInTeamResponse {
  player: Player[];
}
export interface ObjectizedPlayerInTeam {
  idTeam: string | null;
  idPlayerManager: string | null;
  strNationality: string;
  strPlayer: string;
  dateBorn: string | null;
  strPosition: string | null;
  strHeight: string | null;
  strWeight: string | null;
  socialUrls: SocialUrls;
  thumbUrl: string | null;
}

export interface Event {
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
  intRound: string | null;
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
export interface GetNext5EventsResponse {
  events: Event[];
}
export interface ObjectizedEvent {
  idEvent: string;
  strEvent: string;
  strFilename: string;
  idLeague: string;
  strLeague: string;
  strHomeTeam: string;
  strAwayTeam: string;
  intRound: string | null;
  dateEvent: string;
  strTime: string;
  idHomeTeam: string;
  idAwayTeam: string;
}