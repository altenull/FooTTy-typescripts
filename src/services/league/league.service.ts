import axios from 'axios';
import {GetLeagueSeasonsPayload, GetLeagueSeasonsResponse} from './models';
import {foottyEndPoint} from '../service.env';

class LeagueService {
  getLeagueSeasons = (payload: GetLeagueSeasonsPayload) => {
    console.log(payload);
    const url2: string = `${foottyEndPoint}/lookupleague.php?id=${payload.leagueId}&s=all`;

    return axios.get(url2)
                .then((response) => response.data)
                .then((leagues: GetLeagueSeasonsResponse[]) => leagues)
                .catch((error) => console.error(error));
  }
}

const leagueService = new LeagueService();

export default leagueService;