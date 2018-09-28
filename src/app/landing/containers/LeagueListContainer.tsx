import * as React from 'react';
import {connect} from 'react-redux';
import LeagueList from '../components/LeagueList/LeagueList';

class LeagueListContainer extends React.Component {
  handleLeagueClick = (selectedLeague: string) => {
    // TODO: implement league click logic
    alert(selectedLeague);
  };

  render() {
    const {handleLeagueClick} = this;

    return (
      <LeagueList onLeagueClick={handleLeagueClick}/>
    );
  }
}

export default connect(
    () => ({}),
    () => ({})
)(LeagueListContainer);
