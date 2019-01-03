import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedPlayerInTeam} from '../../../store/models/foottyAPI/foottyAPI-team.model';
import HexagonLabel from '../../ui/components/HexagonLabel/HexagonLabel';

interface Props {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
}

class PlayerListContainer extends React.Component<Props> {
  render() {
    const {allPlayersInTeam} = this.props;

    if (!allPlayersInTeam) {
      return <div style={{color: 'white'}}>Loading...</div>;
    }

    const playerList: React.ReactNode = Object.keys(allPlayersInTeam).map((playerId: string) => {
      return (
        <HexagonLabel key={playerId}
                      imgUrl={allPlayersInTeam[playerId].strThumb}
                      mainHeader={allPlayersInTeam[playerId].strPlayer}
                      subHeader={allPlayersInTeam[playerId].strPosition}/>
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
