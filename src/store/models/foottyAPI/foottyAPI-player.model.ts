import {ActionType} from '../shared/shared.model';
import {
  GetFormerTeamsPayload
} from '../../../services/foottyAPI/models';

// Redux
export interface FoottyAPIPlayerActionCreators {
  resetFoottyAPIPlayer(): any;
  getFormerTeams(payload: GetFormerTeamsPayload): any;
  getFormerTeamsRequest(): any;
  getFormerTeamsComplete(): any;
  getFormerTeamsFail(): any;
}

export interface FoottyAPIPlayerState {
  formerTeams: {[formerTeamId: string]: ObjectizedFormerTeam} | null;
  isGetFormerTeamsLoading: boolean;
  isGetFormerTeamsLoaded: boolean;
  getFormerTeamsError: string | null;
}

// Redux-Saga
export interface GetFormerTeamsAction extends ActionType {
  payload: GetFormerTeamsPayload;
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