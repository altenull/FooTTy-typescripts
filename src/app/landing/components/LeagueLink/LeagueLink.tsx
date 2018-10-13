import * as React from 'react';
import styles from './LeagueLink.scss';
import * as classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

interface Props {
  linkTo: string;
  alias: string;
  badgeGrey: string;
  displayName: string;
  fullName: string;
}

class LeagueLink extends React.Component<Props> {
  render() {
    const {
      linkTo,
      alias,
      badgeGrey,
      displayName,
      fullName
    } = this.props;

    return (
      <Link className={cx('LeagueLink')} to={linkTo}>
        <img className={cx('LeagueLink__logo', (alias && `LeagueLink__logo--${alias}`))}
             src={badgeGrey}
             alt={fullName} />
        <h1 className={cx('LeagueLink__title')}>{displayName}</h1>
      </Link>
    );
  }
}

export default LeagueLink;