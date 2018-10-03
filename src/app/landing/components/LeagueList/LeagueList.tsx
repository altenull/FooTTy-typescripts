import * as React from 'react';
import styles from './LeagueList.scss';
import * as classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import PLBadgeGrey from '../../../../assets/images/PL-badge-grey.png';
import LLBadgeGrey from '../../../../assets/images/LL-badge-grey.png';
import BLBadgeGrey from '../../../../assets/images/BL-badge-grey.png';
import {LeagueID} from '../../../../lib/enums';
import {foottyLeagueCollection} from '../../../../lib/variables';

const cx = classNames.bind(styles);

class LeagueList extends React.Component {
  render() {
    return (
      <div className={cx('LeagueList')}>
        <Link className={cx('LeagueList__item')} to={'/pl'}>
          <img className={cx('LeagueList__item-logo', 'LeagueList__item-logo--pl')} src={PLBadgeGrey} alt='Premier League'/>
          <h1 className={cx('LeagueList__item-title')}>{foottyLeagueCollection[LeagueID.PremierLeague].displayName}</h1>
        </Link>
        <Link className={cx('LeagueList__item')} to={'/ll'}>
          <img className={cx('LeagueList__item-logo', 'LeagueList__item-logo--ll')} src={LLBadgeGrey} alt='La Liga'/>
          <h1 className={cx('LeagueList__item-title')}>{foottyLeagueCollection[LeagueID.LaLiga].displayName}</h1>
        </Link>
        <Link className={cx('LeagueList__item')} to={'/bl'}>
          <img className={cx('LeagueList__item-logo', 'LeagueList__item-logo--bl')} src={BLBadgeGrey} alt='Bundesliga'/>
          <h1 className={cx('LeagueList__item-title')}>{foottyLeagueCollection[LeagueID.BundesLiga].displayName}</h1>
        </Link>
      </div>
    );
  }
}

export default LeagueList;