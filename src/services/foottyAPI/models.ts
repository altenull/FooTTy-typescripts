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