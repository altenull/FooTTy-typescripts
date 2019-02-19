import * as React from 'react';
import styles from './OddGridWrapper.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class OddGridWrapper extends React.Component {
  render() {
    const {children} = this.props;

    return (
        <div className={cx('OddGridWrapper')}>
          {children}
        </div>
    );
  }
}

export default OddGridWrapper;