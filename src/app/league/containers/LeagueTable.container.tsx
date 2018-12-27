import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {
  ObjectizedLeagueTable,
  ObjectizedTeamInLeague,
  ObjectizedEventInLeague
} from '../../../store/models/foottyAPI/foottyAPI-league.model';
import {NextEvent} from '../models/league.model';

import LeagueTable from '../components/LeagueTable/LeagueTable';
import LeagueTableRow from '../components/LeagueTableRow/LeagueTableRow';

interface Props {
  leagueTable: {[teamId: string]: ObjectizedLeagueTable} | null;
  allTeamsInLeague: {[teamId: string]: ObjectizedTeamInLeague} | null;
  nextEvents: {[eventId: string]: ObjectizedEventInLeague} | null;
}

class LeagueTableContainer extends React.Component<Props> {
  handleSelectTeam = (teamId: string): void => {
    alert(`selected teamId is ${teamId}`);
  };

  render() {
    const {leagueTable, allTeamsInLeague, nextEvents} = this.props;
    const {handleSelectTeam} = this;

    if (!leagueTable || !allTeamsInLeague || !nextEvents) {
      return null;
    }

    const orderedTeamIds: string[] = Object.keys(leagueTable).sort((prevTeamId: string, nextTeamId: string) => {
      return leagueTable[prevTeamId].rank < leagueTable[nextTeamId].rank ? -1 :
        leagueTable[prevTeamId].rank > leagueTable[nextTeamId].rank ? 1 : 0;
    });

    const orderedNextEvents: ObjectizedEventInLeague[] = Object.values(nextEvents);

    const tableRows: React.ReactNode = orderedTeamIds.map((teamId: string, index: number) => {
      let isTeamBelongToHomeInNextEvent: boolean = false;

      const foundNextEvent: ObjectizedEventInLeague | undefined = orderedNextEvents.find((orderedNextEvent: ObjectizedEventInLeague) => {
        if (orderedNextEvent.idHomeTeam === teamId) {
          return true;
        } else if (orderedNextEvent.idAwayTeam === teamId) {
          isTeamBelongToHomeInNextEvent = true;
          return true;
        }

        return false;
      });

      const badgeUrl: string | null = (allTeamsInLeague[teamId] && allTeamsInLeague[teamId].badgeUrl) || null;
      const nextEventBadgeUrl: string | null = (foundNextEvent && (isTeamBelongToHomeInNextEvent ?
            (allTeamsInLeague[foundNextEvent.idHomeTeam] && allTeamsInLeague[foundNextEvent.idHomeTeam].badgeUrl) :
            (allTeamsInLeague[foundNextEvent.idAwayTeam] && allTeamsInLeague[foundNextEvent.idAwayTeam].badgeUrl)
          )
        ) || null;

      const nextEvent: NextEvent | null = !foundNextEvent ? null : {
        date: foundNextEvent.dateEvent,
        time: foundNextEvent.strTime,
        round: foundNextEvent.intRound,
        name: foundNextEvent.strEvent,
        badgeUrl: nextEventBadgeUrl
      };

      return (
        <LeagueTableRow key={teamId}
                        teamId={teamId}
                        rank={index}
                        badgeUrl={badgeUrl}
                        data={leagueTable[teamId]}
                        nextEvent={nextEvent}
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
    leagueTable: state.foottyAPI.foottyAPILeague.leagueTable,
    allTeamsInLeague: state.foottyAPI.foottyAPILeague.allTeamsInLeague,
    nextEvents: state.foottyAPI.foottyAPILeague.nextEvents
  }),
  () => ({})
)(LeagueTableContainer);
