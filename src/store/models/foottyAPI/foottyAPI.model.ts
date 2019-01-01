import {FoottyAPILeagueActionCreators, FoottyAPILeagueState} from './foottyAPI-league.model';
import {FoottyAPITeamActionCreators, FoottyAPITeamState} from './foottyAPI-team.model';

// Action Creators Model
export interface FoottyAPIActionCreators extends FoottyAPILeagueActionCreators, FoottyAPITeamActionCreators {
}

// State Model
export interface FoottyAPIState {
  foottyAPILeague: FoottyAPILeagueState;
  foottyAPITeam: FoottyAPITeamState;
}