export interface GetLeagueDetailsPayload {
  leagueId: string;
}

export interface GetLeagueSeasonsPayload {
  leagueId: string;
}

export interface GetLeagueTablePayload {
  leagueId: string;
  selectedSeason: string;
}

export interface GetAllTeamsInLeaguePayload {
  league: string;
}

export interface GetNext5EventsPayload {
  teamId: string;
}

export interface GetNextEventsPayload {
  leagueId: string;
}

export interface GetAllPlayersInTeamPayload {
  teamId: string;
}

export interface GetFormerTeamsPayload {
  playerId: string;
}

export interface GetHonoursPayload {
  playerId: string;
}