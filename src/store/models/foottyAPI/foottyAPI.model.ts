import {FoottyAPILeagueActionCreators, FoottyAPILeagueState} from './foottyAPI-league.model';

// Action Creators Model
export interface FoottyAPIActionCreators extends FoottyAPILeagueActionCreators {
}

// State Model
export interface FoottyAPIState {
  foottyAPILeague: FoottyAPILeagueState;
}