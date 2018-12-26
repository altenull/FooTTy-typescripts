import * as React from 'react';
import styles from './LeagueLinkList.scss';
import * as classNames from 'classnames/bind';
import LeagueLink from '../LeagueLink/LeagueLink';
import {withLocale} from '../../../../contexts/localeContext';

const cx = classNames.bind(styles);

interface Props {
  localizedContents: any;
}

class LeagueLinkList extends React.Component<Props> {
  render() {
    const {localizedContents} = this.props;
    const leagueCollection = localizedContents.league.leagueCollection;

    const leagueLinkList = Object.keys(leagueCollection).map((leagueId: string) => {
      const leagueInfo = leagueCollection[leagueId];

      return (
        <LeagueLink key={leagueId}
                    linkTo={leagueId}
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

export default withLocale(LeagueLinkList);