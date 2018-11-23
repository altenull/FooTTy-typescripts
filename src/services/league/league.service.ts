import axios from 'axios';
import {GetLeagueSeasonsPayload} from './models';
import {foottyEndPoint} from '../service.env';

class LeagueService {
  getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
    const url: string = `${foottyEndPoint}/lookupleague.php?id=${payload.leagueId}&s=all`;

    return axios.get(url)
                .then((response) => response.data)
                .catch((error) => console.error(error));
  }
}

const leagueService = new LeagueService();

export default leagueService;