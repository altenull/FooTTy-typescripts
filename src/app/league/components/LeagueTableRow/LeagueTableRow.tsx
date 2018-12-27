import * as React from 'react';
import styles from './LeagueTableRow.scss';
import * as classNames from 'classnames/bind';
import {NextEvent} from '../../models/league.model';
import {ObjectizedLeagueTable} from '../../../../store/models/foottyAPI/foottyAPI-league.model';

const cx = classNames.bind(styles);

interface Props {
  teamId: string;
  rank: number;
  badgeUrl: string | null;
  data: ObjectizedLeagueTable;
  nextEvent: NextEvent | null;
  onSelectTeam(teamId: string): void;
}

class LeagueTableRow extends React.Component<Props> {
  render() {
    const {teamId, rank, badgeUrl, data, nextEvent, onSelectTeam} = this.props;

    const handledGoalsDifference: string = data.goalsdifference > 0 ?
        `+${data.goalsdifference}` :
        `${data.goalsdifference}`;

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
        <td className={cx('LeagueTableRow__td')}>{handledGoalsDifference}</td>
        <td className={cx('LeagueTableRow__td')}>
          <span>{(nextEvent != null && nextEvent.badgeUrl) ? <img src={nextEvent.badgeUrl} width={'36px'}/> : 'No image'}</span>
        </td>
        <td className={cx('LeagueTableRow__td')}>{data.total}</td>
      </tr>
    );
  }
}

export default LeagueTableRow;