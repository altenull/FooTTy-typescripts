import * as React from 'react';
import styles from './LeagueTable.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  tableRows: React.ReactNode;
}

class LeagueTable extends React.Component<Props> {
  render() {
    const {tableRows} = this.props;

    return (
      <table className={cx('LeagueTable')}>
        <thead>
          <tr>
            <th>순위</th>
            <th>이미지, 구단명</th>
            <th>경기수</th>
            <th>승</th>
            <th>무</th>
            <th>패</th>
            <th>득점</th>
            <th>실점</th>
            <th>득실차</th>
            <th>최근 5경</th>
            <th>승점</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }
}

export default LeagueTable;