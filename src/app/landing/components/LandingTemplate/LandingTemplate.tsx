import * as React from 'react';
import styles from './LandingTemplate.scss';
import * as classNames from 'classnames/bind';
import RevealText from '../RevealText/RevealText';
import LeagueLinkList from '../LeagueLinkList/LeagueLinkList';

const cx = classNames.bind(styles);

class LandingTemplate extends React.Component {
  render() {
    return (
      <div className={cx('LandingTemplate')}>
        <div className={cx('LandingTemplate__left-group')}>
          <RevealText/>
        </div>
        <div className={cx('LandingTemplate__right-group')}>
          <LeagueLinkList/>
        </div>
      </div>
    );
  }
}

export default LandingTemplate;