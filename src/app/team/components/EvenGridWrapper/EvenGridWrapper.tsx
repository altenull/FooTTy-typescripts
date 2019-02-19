import * as React from 'react';
import styles from './EvenGridWrapper.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class EvenGridWrapper extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <div className={cx('EvenGridWrapper')}>
        {children}
      </div>
    );
  }
}

export default EvenGridWrapper;