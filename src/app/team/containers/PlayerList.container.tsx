import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedPlayerInTeam} from '../../../store/models/foottyAPI/foottyAPI-team.model';
import {FoottyAPIActions} from '../../../store/actionCreators';
import {GetFormerTeamsPayload, GetHonoursPayload} from '../../../services/foottyAPI/models';

import HexagonLabel from '../../ui/components/HexagonLabel/HexagonLabel';
import OddGridWrapper from '../components/OddGridWrapper/OddGridWrapper';
import EvenGridWrapper from '../components/EvenGridWrapper/EvenGridWrapper';

interface Props {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
}

class PlayerListContainer extends React.Component<Props> {
  handleSelectPlayer = (playerId: string) => {
    FoottyAPIActions.getFormerTeams({playerId} as GetFormerTeamsPayload);
    FoottyAPIActions.getHonours({playerId} as GetHonoursPayload)
  };

  render() {
    const {allPlayersInTeam} = this.props;
    const {handleSelectPlayer} = this;

    // TODO: Handle loading
    if (!allPlayersInTeam) {
      return <div style={{color: 'white'}}>Loading...</div>;
    }

    const wholePlayerIds: string[] = Object.keys(allPlayersInTeam);
    const pusherFlags = [42, 38, 35, 31, 28, 24, 21, 17, 14, 10, 7, 3]; // Assume maximum player is 42.

    let pusher: string[] = [];
    let pusherIndex: number | undefined = pusherFlags.pop();
    let hierarchicalPlayerIds: string[][] = [];

    for (let i = 0; i < wholePlayerIds.length; i++) {
      if (pusherIndex != null && i < pusherIndex) {
        pusher.push(wholePlayerIds[i]);
        if (i === (wholePlayerIds.length - 1)) {
          hierarchicalPlayerIds = [
            ...hierarchicalPlayerIds,
            [...pusher]
          ];
        }
      } else {
        hierarchicalPlayerIds = [
          ...hierarchicalPlayerIds,
          [...pusher]
        ];
        pusher = [];
        pusher.push(wholePlayerIds[i]);
        pusherIndex = pusherFlags.pop();
      }
    }

    const playerList: React.ReactNode = hierarchicalPlayerIds.map((playerIds: string[], index: number) => {
      const GridWrapper = ((index % 2) === 0) ? OddGridWrapper : EvenGridWrapper;

      return (
        <GridWrapper key={index}>
          {playerIds.map((playerId: string) => {
            return (
              <HexagonLabel key={playerId}
                            id={playerId}
                            imgUrl={allPlayersInTeam[playerId].thumbUrl}
                            label={allPlayersInTeam[playerId].strPlayer}
                            onSelectPlayer={handleSelectPlayer}/>
            );
          })}
        </GridWrapper>
      )
    });

    return (
      <React.Fragment>
        {playerList}
      </React.Fragment>
    );
  }
}

export default connect(
  (state: RootState) => ({
    allPlayersInTeam: state.foottyAPI.foottyAPITeam.allPlayersInTeam
  }),
  () => ({})
)(PlayerListContainer);
