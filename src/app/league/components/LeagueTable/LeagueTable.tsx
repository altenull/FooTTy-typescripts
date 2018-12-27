import * as React from 'react';
import styles from './LeagueTable.scss';
import * as classNames from 'classnames/bind';
import {withLocale} from '../../../../contexts/localeContext';

const cx = classNames.bind(styles);

interface Props {
  localizedContents: any;
  tableRows: React.ReactNode;
}

class LeagueTable extends React.Component<Props> {
  render() {
    const {localizedContents, tableRows} = this.props;
    const leagueTableContents = localizedContents.league.leagueTable;

    return (
      <table className={cx('LeagueTable')}>
        <thead>
          <tr>
            <th>{leagueTableContents.position}</th>
            <th>{leagueTableContents.club}</th>
            <th>{leagueTableContents.played}</th>
            <th>{leagueTableContents.won}</th>
            <th>{leagueTableContents.drawn}</th>
            <th>{leagueTableContents.lost}</th>
            <th>{leagueTableContents.goalsFor}</th>
            <th>{leagueTableContents.goalsAgainst}</th>
            <th>{leagueTableContents.goalDifference}</th>
            <th>{leagueTableContents.next}</th>
            <th>{leagueTableContents.points}</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default withLocale(LeagueTable);