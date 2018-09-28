import * as React from 'react';
import styles from './RevealText.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class RevealText extends React.Component {
  render() {
    return (
      <div className={cx('RevealText')}>
        <h1 className={cx('RevealText__main-title')}>
          FOOTTY
        </h1>
        <h2 className={cx('RevealText__main-title')}>
          A FOOTBALL TERMINAL
        </h2>
        <h3 className={cx('RevealText__sub-title')}>
          SPORTS X TECHNOLOGY
        </h3>
      </div>
    );
  }
}

export default RevealText;