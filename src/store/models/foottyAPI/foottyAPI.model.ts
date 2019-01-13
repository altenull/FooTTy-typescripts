import {FoottyAPILeagueActionCreators, FoottyAPILeagueState} from './foottyAPI-league.model';
import {FoottyAPITeamActionCreators, FoottyAPITeamState} from './foottyAPI-team.model';
import {FoottyAPIPlayerActionCreators, FoottyAPIPlayerState} from './foottyAPI-player.model';

// Action Creators Model
export interface FoottyAPIActionCreators extends
  FoottyAPILeagueActionCreators,
  FoottyAPITeamActionCreators,
  FoottyAPIPlayerActionCreators {
}

// State Model
export interface FoottyAPIState {
  foottyAPILeague: FoottyAPILeagueState;
  foottyAPITeam: FoottyAPITeamState;
  foottyAPIPlayer: FoottyAPIPlayerState;
}