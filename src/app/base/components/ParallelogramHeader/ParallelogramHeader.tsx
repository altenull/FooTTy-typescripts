import * as React from 'react';
import styles from './ParallelogramHeader.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ParallelogramHeader extends React.Component {
  render() {
    return (
      <div className={cx('ParallelogramHeader')}>
        ParallelogramHeader
      </div>
    );
  }
}

export default ParallelogramHeader;