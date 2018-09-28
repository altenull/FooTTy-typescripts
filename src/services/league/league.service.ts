import axios from 'axios';
import {GetLatestSeasonPayload} from './models';

const {REACT_APP_THE_SPORTS_DB_END_POINT, REACT_APP_THE_SPORTS_DB_API_KEY} = process.env;

class LeagueService {
  getLatestSeason = ({leagueId}: GetLatestSeasonPayload) => {
    const url = `${REACT_APP_THE_SPORTS_DB_END_POINT}/${REACT_APP_THE_SPORTS_DB_API_KEY}/lookupleague.php?id=${leagueId}&s=all`;

    return axios.get(url)
                .then((response) => response.data)
                .catch((error) => console.error(error));
  }
}

export default new LeagueService();