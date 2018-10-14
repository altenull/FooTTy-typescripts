import * as React from 'react';
import styles from './LeagueLinkList.scss';
import * as classNames from 'classnames/bind';
import {leagueCollection} from '../../../../lib/variables';
import LeagueLink from '../LeagueLink/LeagueLink';

const cx = classNames.bind(styles);

class LeagueLinkList extends React.Component {
  render() {
    const leagueLinkList = Object.keys(leagueCollection).map((leagueID) => {
      const leagueInfo = leagueCollection[leagueID];

      return (
        <LeagueLink key={leagueID}
                    linkTo={leagueID}
                    alias={leagueInfo.alias}
                    fullName={leagueInfo.fullName}
                    displayName={leagueInfo.displayName}
                    badgeGrey={leagueInfo.badgeGrey}/>
      );
    });

    return (
      <div className={cx('LeagueLinkList')}>
        {leagueLinkList}
      </div>
    );
  }
}

export default LeagueLinkList;