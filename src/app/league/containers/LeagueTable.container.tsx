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
  handleSelectTeam = (teamId: string): void => {
    alert(`selected teamId is ${teamId}`);
  };

  render() {
    const {leagueTable} = this.props;
    const {handleSelectTeam} = this;

    if (!leagueTable) {
      return null;
    }

    const orderedTeamIds: string[] = Object.keys(leagueTable).sort((prevTeamId: string, nextTeamId: string) => {
      return leagueTable[prevTeamId].rank < leagueTable[nextTeamId].rank ? -1 :
        leagueTable[prevTeamId].rank > leagueTable[nextTeamId].rank ? 1 : 0;
    });

    const tableRows: React.ReactNode = orderedTeamIds.map((teamId: string, index: number) => {
      return (
        <LeagueTableRow key={teamId}
                        teamId={teamId}
                        rank={index}
                        data={leagueTable[teamId]}
                        onSelectTeam={handleSelectTeam}/>
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
