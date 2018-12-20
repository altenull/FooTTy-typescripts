import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedLeagueTable, ObjectizedTeamInLeague} from '../../../store/models/league.model';
import LeagueTable from '../components/LeagueTable/LeagueTable';
import LeagueTableRow from '../components/LeagueTableRow/LeagueTableRow';

interface Props {
  leagueTable: {[teamId: string]: ObjectizedLeagueTable} | null;
  allTeamsInLeague: {[teamId: string]: ObjectizedTeamInLeague} | null;
}

class LeagueTableContainer extends React.Component<Props> {
  handleSelectTeam = (teamId: string): void => {
    alert(`selected teamId is ${teamId}`);
  };

  render() {
    const {leagueTable, allTeamsInLeague} = this.props;
    const {handleSelectTeam} = this;

    if (!leagueTable || !allTeamsInLeague) {
      return null;
    }

    const orderedTeamIds: string[] = Object.keys(leagueTable).sort((prevTeamId: string, nextTeamId: string) => {
      return leagueTable[prevTeamId].rank < leagueTable[nextTeamId].rank ? -1 :
        leagueTable[prevTeamId].rank > leagueTable[nextTeamId].rank ? 1 : 0;
    });

    const tableRows: React.ReactNode = orderedTeamIds.map((teamId: string, index: number) => {
      const badgeUrl: string | null = (allTeamsInLeague[teamId] && allTeamsInLeague[teamId].badgeUrl) || null;

      return (
        <LeagueTableRow key={teamId}
                        teamId={teamId}
                        rank={index}
                        badgeUrl={badgeUrl}
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
    leagueTable: state.league.leagueTable,
    allTeamsInLeague: state.league.allTeamsInLeague
  }),
  () => ({})
)(LeagueTableContainer);
