import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../../store/modules';
import {FoottyAPIActions, LeagueActions} from '../../../store/actionCreators';
import {GetLeagueTablePayload} from '../../../services/foottyAPI/models';

import SeasonSelector from '../components/SeasonSelector/SeasonSelector';
import {SetSelectedSeasonPayload} from '../../../store/models/league/league.model';

interface Props {
  leagueId: string;
  selectedSeason: string;
  seasons: string[];
}

interface States {
  isExpanded: boolean
}

class SeasonSelectorContainer extends React.Component<Props, States> {
  state = {
    isExpanded: false
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<States>, nextContext: any): boolean {
    return this.props.leagueId !== nextProps.leagueId
        || this.props.selectedSeason !== nextProps.selectedSeason
        || this.state.isExpanded !== nextState.isExpanded;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<States>, snapshot?: any): void {
    const {leagueId, selectedSeason} = this.props;

    if (!!selectedSeason && (prevProps.selectedSeason !== selectedSeason)) {
      const getLeagueTablePayload: GetLeagueTablePayload = {
        leagueId,
        selectedSeason
      };

      FoottyAPIActions.getLeagueTable(getLeagueTablePayload);
    }
  }

  handleExpandability = (): void => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  handleSelectSeason = (selectedSeason: string): void => {
    const setSelectedSeasonPayload: SetSelectedSeasonPayload = {
      selectedSeason
    };
    LeagueActions.setSelectedSeason(setSelectedSeasonPayload);

    // TODO: Request League Table & setState(ixExpanded: false)
    this.setState({
      isExpanded: false
    });
  };

  render() {
    const {selectedSeason, seasons} = this.props;
    const {isExpanded} = this.state;
    const {handleExpandability, handleSelectSeason} = this;

    const selectableSeasons: string[] = seasons.filter((season: string) => season !== selectedSeason);

    return (
      <SeasonSelector isExpanded={isExpanded}
                      selectedSeason={selectedSeason}
                      selectableSeasons={selectableSeasons}
                      onExpandability={handleExpandability}
                      onSelectSeason={handleSelectSeason}/>
    );
  }
}

export default connect(
  (state: RootState) => ({
    selectedSeason: state.league.selectedSeason,
    seasons: state.foottyAPI.foottyAPILeague.seasons
  }),
  () => ({})
)(SeasonSelectorContainer);
