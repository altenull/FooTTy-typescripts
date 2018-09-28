import * as React from 'react';
import styles from './LeagueList.scss';
import * as classNames from 'classnames/bind';
import PLBadgeGrey from '../../../../assets/images/PL-badge-grey.png';
import LLBadgeGrey from '../../../../assets/images/LL-badge-grey.png';
import BLBadgeGrey from '../../../../assets/images/BL-badge-grey.png';

const cx = classNames.bind(styles);

interface Props {
  onLeagueClick(selectedLeague: string): any;
}

class LeagueList extends React.Component<Props> {
  render() {
    const {onLeagueClick} = this.props;

    return (
      <div className={cx('LeagueList')}>
        <div className={cx('LeagueList__item', 'fade-enter1')} onClick={() => onLeagueClick('PL')}>
          <img src={PLBadgeGrey} className={cx('premierleague')} alt='Premier League' />
          <span>PREMIER LEAGUE</span>
        </div>
        <div className={cx('LeagueList__item', 'fade-enter2')} onClick={() => onLeagueClick('LL')}>
          <img src={LLBadgeGrey} className={cx('laliga')} alt='La Liga' />
          <span>LA LIGA</span>
        </div>
        <div className={cx('LeagueList__item', 'fade-enter3')} onClick={() => onLeagueClick('BL')}>
          <img src={BLBadgeGrey} className={cx('bundesliga')} alt='Bundesliga' />
          <span>BUNDESLIGA</span>
        </div>
      </div>
    );
  }
}

export default LeagueList;