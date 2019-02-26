import axios from 'axios';
import {privateFoottyEndPoint, publicFoottyEndPoint} from '../service.env';
import {
  GetLeagueDetailsPayload,
  GetAllTeamsInLeaguePayload,
  GetLeagueSeasonsPayload,
  GetLeagueTablePayload,
  GetNextEventsPayload,
  GetAllPlayersInTeamPayload,
  GetFormerTeamsPayload,
  GetHonoursPayload,
} from './models';

class FoottyAPIService {
  getLeagueDetails = (payload: GetLeagueDetailsPayload) => {
    const url: string = `${privateFoottyEndPoint}/lookupleague.php?id=${payload.leagueId}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getAllTeamsInLeague = (payload: GetAllTeamsInLeaguePayload) => {
    const url: string = `${privateFoottyEndPoint}/search_all_teams.php?l=${payload.league}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
    const url: string = `${privateFoottyEndPoint}/search_all_seasons.php?id=${payload.leagueId}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getLeagueTable = (payload: GetLeagueTablePayload) => {
    const url: string = `${privateFoottyEndPoint}/lookuptable.php?l=${payload.leagueId}&s=${payload.selectedSeason}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getNextEvents = (payload: GetNextEventsPayload) => {
    const url: string = `${privateFoottyEndPoint}/eventsnextleague.php?id=${payload.leagueId}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getAllPlayersInTeam = (payload: GetAllPlayersInTeamPayload) => {
    const url: string = `${privateFoottyEndPoint}/lookup_all_players.php?id=${payload.teamId}`;

    return axios.get(url)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  getFormerTeams = (payload: GetFormerTeamsPayload) => {
    const url: string = `${publicFoottyEndPoint}/lookupformerteams.php?id=${payload.playerId}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getHonours = (payload: GetHonoursPayload) => {
    const url: string = `${publicFoottyEndPoint}/lookuphonors.php?id=${payload.playerId}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };
}

export default new FoottyAPIService();