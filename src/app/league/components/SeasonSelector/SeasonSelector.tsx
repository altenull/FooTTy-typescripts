import * as React from 'react';
import styles from './SeasonSelector.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  selectedSeason: string;
  selectableSeasons: string[];
  onSelectSeason(selectedSeason: string): void;
}

class SeasonSelector extends React.Component<Props> {
  render() {
    // const {selectedSeason, selectableSeasons, onSelectSeason} = this.props;

    return (
      <div className={cx('SeasonSelector')}>
        SeasonSelector
      </div>
    );
  }
}

export default SeasonSelector;