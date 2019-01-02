import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {ObjectizedPlayerInTeam} from '../../../store/models/foottyAPI/foottyAPI-team.model';

interface Props {
  allPlayersInTeam: {[playerId: string]: ObjectizedPlayerInTeam} | null;
}

class PlayerListContainer extends React.Component<Props> {
  render() {
    const {allPlayersInTeam} = this.props;

    if (!allPlayersInTeam) {
      return <div style={{color: 'white'}}>Loading...</div>;
    }

    // TODO: Hexagon player component

    return (
      <div>
        Player List
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
