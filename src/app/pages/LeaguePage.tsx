import * as React from 'react';
import {RouteProps} from 'react-router-dom';
import {LeagueActions} from '../../store/actionCreators';
import {GetLeagueSeasonsPayload} from '../../services/league/models';
import {leagueCollection} from '../../lib/variables';

import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import ParallelogramHeader from '../base/components/ParallelogramHeader/ParallelogramHeader';
import SeasonSelectorContainer from '../league/containers/SeasonSelector.container';

class LeaguePage extends React.Component<any & RouteProps> {
  currentLeagueId: string = '';

  constructor(props: any) {
    super(props);
    const {match} = this.props;
    this.currentLeagueId = match.params.league;
    this.initLeaguePage(this.currentLeagueId);
  }

  componentWillUnmount() {
    LeagueActions.initializeLeague();
  }

  initLeaguePage = (leagueId: string): void => {
    const getLeagueSeasonsPayload: GetLeagueSeasonsPayload = {
      leagueId
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
        <SeasonSelectorContainer/>
      </PageTemplate>
    );
  }
}

export default LeaguePage;