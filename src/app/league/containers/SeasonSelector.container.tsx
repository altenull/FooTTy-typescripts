import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {LeagueActions} from '../../../store/actionCreators';
import {SetSelectedSeasonPayload} from '../../../store/models/league.model';
import SeasonSelector from '../components/SeasonSelector/SeasonSelector';

interface Props {
  selectedSeason: string;
  seasons: string[];
}

class SeasonSelectorContainer extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
    return this.props.selectedSeason !== nextProps.selectedSeason;
  }

  handleSelectSeason = (selectedSeason: string): void => {
    const setSelectedSeasonPayload: SetSelectedSeasonPayload = {
      selectedSeason
    };
    LeagueActions.setSelectedSeason(setSelectedSeasonPayload);
  };

  render() {
    const {selectedSeason, seasons} = this.props;
    const {handleSelectSeason} = this;
    const selectableSeasons: string[] = seasons.filter((season: string) => season !== selectedSeason);

    return (
      <SeasonSelector selectedSeason={selectedSeason}
                      selectableSeasons={selectableSeasons}
                      onSelectSeason={handleSelectSeason}/>
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
