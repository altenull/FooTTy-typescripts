import axios from 'axios';
import {foottyEndPoint} from '../service.env';
import {
  GetAllTeamsInLeaguePayload,
  GetLeagueSeasonsPayload,
  GetLeagueTablePayload
} from './models';

class FoottyAPIService {
  getAllTeamsInLeague = (payload: GetAllTeamsInLeaguePayload) => {
    const url: string = `${foottyEndPoint}/search_all_teams.php?s=Soccer&c=${payload.country}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
    const url: string = `${foottyEndPoint}/lookupleague.php?id=${payload.leagueId}&s=all`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };

  getLeagueTable = (payload: GetLeagueTablePayload) => {
    const url: string = `${foottyEndPoint}/lookuptable.php?l=${payload.leagueId}&s=${payload.selectedSeason}`;

    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.error(error));
  };
}

export default new FoottyAPIService();