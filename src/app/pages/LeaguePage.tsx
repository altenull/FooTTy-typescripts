import * as React from 'react';
import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import {RouteProps} from 'react-router-dom';
import {LeagueActions} from '../../store/actionCreators';
import {GetLeagueSeasonsPayload} from '../../services/league/models';

// interface Props {
// }

class LeaguePage extends React.Component<any & RouteProps> {
  constructor(props: any) {
    super(props);
    const {match} = this.props;

    const getLeagueSeasonsPayload: GetLeagueSeasonsPayload = {
      leagueId: match.params.league
    };

    LeagueActions.getLeagueSeasons(getLeagueSeasonsPayload);
  }

  render() {
    return (
      <PageTemplate>
        LeaguePage
      </PageTemplate>
    );
  }
}

export default LeaguePage;