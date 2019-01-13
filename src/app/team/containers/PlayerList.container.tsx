import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedPlayerInTeam} from '../../../store/models/foottyAPI/foottyAPI-team.model';
import HexagonLabel from '../../ui/components/HexagonLabel/HexagonLabel';
import {FoottyAPIActions} from '../../../store/actionCreators';
import {GetFormerTeamsPayload} from '../../../services/foottyAPI/models';

interface Props {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
}

class PlayerListContainer extends React.Component<Props> {
  handleSelectPlayer = (playerId: string) => {
    FoottyAPIActions.getFormerTeams({playerId} as GetFormerTeamsPayload);
  };

  render() {
    const {allPlayersInTeam} = this.props;
    const {handleSelectPlayer} = this;

    // TODO: Handle loading
    if (!allPlayersInTeam) {
      return <div style={{color: 'white'}}>Loading...</div>;
    }

    const playerList: React.ReactNode = Object.keys(allPlayersInTeam).map((playerId: string) => {
      return (
        <HexagonLabel key={playerId}
                      id={playerId}
                      imgUrl={allPlayersInTeam[playerId].strThumb}
                      label={allPlayersInTeam[playerId].strPlayer}
                      onSelectPlayer={handleSelectPlayer}/>
      );
    });

    return (
      <div>
        {playerList}
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    allPlayersInTeam: state.foottyAPI.foottyAPITeam.allPlayersInTeam
  }),
  () => ({})
)(PlayerListContainer);
