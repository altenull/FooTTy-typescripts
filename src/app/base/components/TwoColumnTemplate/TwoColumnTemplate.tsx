import * as React from 'react';
import styles from './TwoColumnTemplate.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}

class TwoColumnTemplate extends React.Component<Props> {
  render() {
    const {left, right} = this.props;

    return (
      <div className={cx('TwoColumnTemplate')}>
        <div className={cx('TwoColumnTemplate__left')}>
          {left}
        </div>
        <div className={cx('TwoColumnTemplate__right')}>
          {right}
        </div>
      </div>
    );
  }
}

export default TwoColumnTemplate;