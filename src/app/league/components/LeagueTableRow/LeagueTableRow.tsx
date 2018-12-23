import * as React from 'react';
import styles from './LeagueTableRow.scss';
import * as classNames from 'classnames/bind';
import {ObjectizedLeagueTable} from '../../../../store/models/foottyAPI/foottyAPI-league.model';

const cx = classNames.bind(styles);

interface Props {
  teamId: string;
  rank: number;
  badgeUrl: string | null;
  data: ObjectizedLeagueTable;
  onSelectTeam(teamId: string): void;
}

class LeagueTableRow extends React.Component<Props> {
  render() {
    const {teamId, rank, badgeUrl, data, onSelectTeam} = this.props;


    return (
      <tr className={cx('LeagueTableRow')} onClick={() => onSelectTeam(teamId)}>
        <th className={cx('LeagueTableRow__th')}>{rank}</th>
        <td className={cx('LeagueTableRow__td')}>
          <span>{badgeUrl ? <img src={badgeUrl} width={'36px'}/> : 'No image'}</span>, {data.name}
        </td>
        <td className={cx('LeagueTableRow__td')}>{data.played}</td>
        <td className={cx('LeagueTableRow__td')}>{data.win}</td>
        <td className={cx('LeagueTableRow__td')}>{data.draw}</td>
        <td className={cx('LeagueTableRow__td')}>{data.loss}</td>
        <td className={cx('LeagueTableRow__td')}>{data.goalsfor}</td>
        <td className={cx('LeagueTableRow__td')}>{data.goalsagainst}</td>
        <td className={cx('LeagueTableRow__td')}>{data.goalsdifference}</td>
        <td className={cx('LeagueTableRow__td')}>최근 5경기</td>
        <td className={cx('LeagueTableRow__td')}>{data.total}</td>
      </tr>
    );
  }
}

export default LeagueTableRow;