import * as React from 'react';
import {RouteProps} from 'react-router-dom';
import {FoottyAPIActions} from '../../store/actionCreators';
import {GetAllTeamsInLeaguePayload, GetLeagueSeasonsPayload} from '../../services/foottyAPI/models';
import {leagueCollection} from '../../lib/variables';

import SeasonSelectorContainer from '../league/containers/SeasonSelector.container';
import LeagueTableContainer from '../league/containers/LeagueTable.container';

import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import ParallelogramHeader from '../base/components/ParallelogramHeader/ParallelogramHeader';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate/TwoColumnTemplate';

class LeaguePage extends React.Component<any & RouteProps> {
  currentLeagueId: string = '';

  constructor(props: any) {
    super(props);
    const {match} = this.props;
    this.currentLeagueId = match.params.league;
    this.initLeaguePage(this.currentLeagueId);
  }

  componentWillUnmount() {
    FoottyAPIActions.resetFoottyAPILeague();
  }

  initLeaguePage = (leagueId: string): void => {
    const country: string = leagueCollection[this.currentLeagueId].country;

    FoottyAPIActions.getAllTeamsInLeague({country} as GetAllTeamsInLeaguePayload);
    FoottyAPIActions.getLeagueSeasons({leagueId} as GetLeagueSeasonsPayload);
  };

  render() {
    const pageHeaderBadge: string = leagueCollection[this.currentLeagueId].badge;
    const pageHeaderCopy: string = leagueCollection[this.currentLeagueId].displayName;
    const pageHeader: React.ReactNode = <ParallelogramHeader badge={pageHeaderBadge}
                                                             copy={pageHeaderCopy}/>;

    const left: React.ReactNode = <SeasonSelectorContainer leagueId={this.currentLeagueId}/>;
    const right: React.ReactNode = <LeagueTableContainer/>;

    return (
      <PageTemplate pageHeader={pageHeader}>
        <TwoColumnTemplate left={left}
                           right={right}/>
      </PageTemplate>
    );
  }
}

export default LeaguePage;