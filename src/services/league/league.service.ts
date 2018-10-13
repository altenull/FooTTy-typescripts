import axios from 'axios';
import {GetLeagueSeasonsPayload} from './models';
import {foottyEndPoint} from '../service.env';

class LeagueService {
  getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
    const url = `${foottyEndPoint}/lookupleague.php?id=${payload.leagueID}&s=all`;

    return axios.get(url)
                .then((response) => response.data)
                .catch((error) => console.error(error));
  }
}

export default new LeagueService();