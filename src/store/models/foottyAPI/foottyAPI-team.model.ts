import {ActionType} from '../shared/shared.model';
import {
  GetAllPlayersInTeamPayload
} from '../../../services/foottyAPI/models';

// Redux
export interface FoottyAPITeamActionCreators {
  resetFoottyAPITeam(): any;
  getAllPlayersInTeam(payload: GetAllPlayersInTeamPayload): any;
  getAllPlayersInTeamRequest(): any;
  getAllPlayersInTeamComplete(): any;
  getAllPlayersInTeamFail(): any;
}

export interface FoottyAPITeamState {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
  isGetAllPlayersInTeamLoading: boolean;
  isGetAllPlayersInTeamLoaded: boolean;
  getAllPlayersInTeamError: string | null;
}

// Redux-Saga
export interface GetAllPlayersInTeamAction extends ActionType {
  payload: GetAllPlayersInTeamPayload;
}

export interface Player {
  idPlayer: string;
  idTeam: string | null;
  idSoccerXML: string | null;
  idPlayerManager: string | null;
  strNationality: string | null;
  strPlayer: string | null;
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
  strLocked: string | null;
}
export interface GetAllPlayersInTeamResponse {
  player: Player[];
}
export interface ObjectizedPlayerInTeam {
  idTeam: string | null;
  idPlayerManager: string | null;
  strNationality: string | null;
  strPlayer: string | null;
  dateBorn: string | null;
  strPosition: string | null;
  strFacebook: string | null;
  strWebsite: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
  strYoutube: string | null;
  strHeight: string | null;
  strWeight: string | null;
  strThumb: string | null;
}