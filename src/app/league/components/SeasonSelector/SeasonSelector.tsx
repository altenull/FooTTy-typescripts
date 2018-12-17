import * as React from 'react';
import styles from './SeasonSelector.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  isExpanded: boolean;
  selectedSeason: string;
  selectableSeasons: string[];
  onExpandability(): void;
  onSelectSeason(selectedSeason: string): void;
}

class SeasonSelector extends React.Component<Props> {
  render() {
    const {
      isExpanded,
      selectedSeason,
      selectableSeasons,
      onExpandability,
      onSelectSeason
    } = this.props;

    const displayedSeason: React.ReactNode = !isExpanded
      ? (
        <li className={cx('SeasonSelector__li')}
            onClick={() => onExpandability()}>
          {selectedSeason}
        </li>
      )
      : (
        selectableSeasons.map((selectableSeason: string) => {
          return (
            <li key={selectableSeason}
                className={cx('SeasonSelector__li')}
                onClick={() => onSelectSeason(selectableSeason)}>
              {selectableSeason}
            </li>
          );
        })
      );

    // SeasonSelector 내에서 selectedSeason 보여주고,
    return (
      <div className={cx('SeasonSelector', {'SeasonSelector--expanded': isExpanded})}>
        <ul className={cx('SeasonSelector__ul')}>
          {displayedSeason}
        </ul>
      </div>
    );
  }
}

export default SeasonSelector;