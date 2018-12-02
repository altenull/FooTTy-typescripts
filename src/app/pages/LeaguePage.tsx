import * as React from 'react';
import {RouteProps} from 'react-router-dom';
import {LeagueActions} from '../../store/actionCreators';
import {GetLeagueSeasonsPayload} from '../../services/league/models';
import {leagueCollection} from '../../lib/variables';

import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import ParallelogramHeader from '../base/components/ParallelogramHeader/ParallelogramHeader';

class LeaguePage extends React.Component<any & RouteProps> {
  currentLeagueId: string = '';

  constructor(props: any) {
    super(props);
    const {match} = this.props;
    this.currentLeagueId = match.params.league;
    this.initLeaguePage();
  }

  componentWillUnmount() {
    LeagueActions.initializeLeague();
  }

  initLeaguePage = () => {
    const getLeagueSeasonsPayload: GetLeagueSeasonsPayload = {
      leagueId: this.currentLeagueId
    };
    LeagueActions.getLeagueSeasons(getLeagueSeasonsPayload);
  };

  render() {
    const pageHeaderBadge: string = leagueCollection[this.currentLeagueId].badge;
    const pageHeaderCopy: string = leagueCollection[this.currentLeagueId].displayName;
    const pageHeader: React.ReactNode = <ParallelogramHeader badge={pageHeaderBadge}
                                                             copy={pageHeaderCopy}/>;

    return (
      <PageTemplate pageHeader={pageHeader}>
        Hey.
      </PageTemplate>
    );
  }
}

export default LeaguePage;