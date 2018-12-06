import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';

interface Props {
  selectedSeason: string;
  seasons: string[];
}

class SeasonSelectorContainer extends React.Component<Props> {
  render() {
    const {selectedSeason} = this.props;

    return (
      <div>
        {selectedSeason}
      </div>
    );
  }
}

export default connect(
  (state: RootState) => ({
    selectedSeason: state.league.selectedSeason,
    seasons: state.league.seasons
  }),
  () => ({})
)(SeasonSelectorContainer);
