export interface GetLeagueSeasonsPayload {
  leagueId: string;
}

export interface GetLeagueTablePayload {
  leagueId: string;
  selectedSeason: string;
}

export interface GetAllTeamsInLeaguePayload {
  country: string;
}

export interface GetNextEventsPayload {
  leagueId: string;
}

export interface GetAllPlayersInTeamPayload {
  teamId: string;
}