import {ActionType} from '../shared/shared.model';
import {
  GetFormerTeamsPayload,
  GetHonoursPayload,
} from '../../../services/foottyAPI/models';

// Redux
export interface FoottyAPIPlayerActionCreators {
  resetFoottyAPIPlayer(): any;
  getFormerTeams(payload: GetFormerTeamsPayload): any;
  getFormerTeamsRequest(): any;
  getFormerTeamsComplete(): any;
  getFormerTeamsFail(): any;
  getHonours(payload: GetHonoursPayload): any;
  getHonoursRequest(): any;
  getHonoursComplete(): any;
  getHonoursFail(): any;
}

export interface FoottyAPIPlayerState {
  formerTeams: {[formerTeamId: string]: ObjectizedFormerTeam} | null;
  honours: {[honourId: string]: ObjectizedHonour} | null;
  isGetFormerTeamsLoading: boolean;
  isGetFormerTeamsLoaded: boolean;
  getFormerTeamsError: string | null;
  isGetHonoursLoading: boolean;
  isGetHonoursLoaded: boolean;
  getHonoursError: string | null;
}

// Redux-Saga
export interface GetFormerTeamsAction extends ActionType {
  payload: GetFormerTeamsPayload;
}
export interface GetHonoursAction extends ActionType {
  payload: GetHonoursPayload;
}

export interface FormerTeam {
  id: string;
  idPlayer: string;
  idFormerTeam: string;
  strSport: string;
  strPlayer: string;
  strFormerTeam: string;
  strTeamBadge: string | null;
  strJoined: string;
  strDeparted: string;
}

export interface GetFormerTeamsResponse {
  formerteams: FormerTeam[];
}

export interface ObjectizedFormerTeam {
  playerId: string;
  teamId: string;
  strFormerTeam: string;
  strTeamBadge: string | null;
  strJoined: string;
  strDeparted: string;
}

export interface Honour {
  id: string;
  idPlayer: string;
  idTeam: string;
  strSport: string;
  strPlayer: string;
  strTeam: string;
  strHonour: string;
  strSeason: string;
}

export interface GetHonoursResponse {
  honors: Honour[];
}

export interface ObjectizedHonour {
  playerId: string;
  teamId: string;
  strPlayer: string;
  strTeam: string;
  strHonour: string;
  strSeason: string;
}