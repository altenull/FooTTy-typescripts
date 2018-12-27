// Redux
export interface LeagueActionCreators {
  resetLeague(): any;
  setSelectedSeason(payload: SetSelectedSeasonPayload): any;
}

export interface LeagueState {
  selectedSeason: string;
}

export interface SetSelectedSeasonPayload {
  selectedSeason: string;
}