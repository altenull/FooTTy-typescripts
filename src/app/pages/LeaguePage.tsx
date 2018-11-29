import * as React from 'react';
import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import {RouteProps} from 'react-router-dom';
import {LeagueActions} from '../../store/actionCreators';
import {GetLeagueSeasonsPayload} from '../../services/league/models';
import ParallelogramHeader from '../base/components/ParallelogramHeader/ParallelogramHeader';

// interface Props {
// }

class LeaguePage extends React.Component<any & RouteProps> {
  constructor(props: any) {
    super(props);
    this.initLeaguePage();
  }

  initLeaguePage = async () => {
    const {match} = this.props;

    const getLeagueSeasonsPayload: GetLeagueSeasonsPayload = {
      leagueId: match.params.league
    };

    try {
      await LeagueActions.getLeagueSeasons(getLeagueSeasonsPayload);
      // TODO: Should Request getLeagueTable API.... but where..?
    } catch(error) {
      console.error(error);
    }
  };

  render() {
    const pageHeader = <ParallelogramHeader/>;

    return (
      <PageTemplate pageHeader={pageHeader}>
        Hey.
      </PageTemplate>
    );
  }
}

export default LeaguePage;