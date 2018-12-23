// Redux
export interface LeagueActionCreators {
  setSelectedSeason(payload: SetSelectedSeasonPayload): any;
}

export interface LeagueState {
  selectedSeason: string;
}

export interface SetSelectedSeasonPayload {
  selectedSeason: string;
}