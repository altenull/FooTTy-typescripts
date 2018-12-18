import * as React from 'react';
import styles from './LeagueTableRow.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// TODO: data Type
interface Props {
  teamId: string;
  rank: number;
  data: any;
}
class LeagueTableRow extends React.Component<Props> {
  render() {
    const {teamId, rank} = this.props;

    return (
      <tr className={cx('LeagueTableRow')}>
        <th>{rank}</th>
        <td>이미지, 구단명</td>
        <td>경기수{teamId}</td>
        <td>승</td>
        <td>무</td>
        <td>패</td>
        <td>득점</td>
        <td>실점</td>
        <td>득실차</td>
        <td>최근 5경</td>
        <td>승점</td>
      </tr>
    );
  }
}

export default LeagueTableRow;