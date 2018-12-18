import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedLeagueTable} from '../../../store/models/league.model';
import LeagueTable from '../components/LeagueTable/LeagueTable';
import LeagueTableRow from '../components/LeagueTableRow/LeagueTableRow';

interface Props {
  leagueTable: {[teamId: string]: ObjectizedLeagueTable} | null;
}

class LeagueTableContainer extends React.Component<Props> {
  render() {
    const {leagueTable} = this.props;

    if (!leagueTable) {
      return null;
    }

    const teamIds: string[] = Object.keys(leagueTable);

    const tableRows: React.ReactNode = teamIds.map((teamId: string, index: number) => {
      return (
        <LeagueTableRow key={teamId}
                        teamId={teamId}
                        rank={index}
                        data={leagueTable[teamId]}/>
      );
    });

    return (
      <LeagueTable tableRows={tableRows}/>
    );
  }
}

export default connect(
  (state: RootState) => ({
    leagueTable: state.league.leagueTable
  }),
  () => ({})
)(LeagueTableContainer);
