import * as React from 'react';
import styles from './ParallelogramHeader.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  badge: string;
  copy: string;
}

class ParallelogramHeader extends React.Component<Props> {
  render() {
    const {badge, copy} = this.props;

    return (
      <div className={cx('ParallelogramHeader')}>
        {!!badge &&
          <img className={cx('ParallelogramHeader__img')}
               src={badge}
               alt={copy}/>
        }
        {copy}
      </div>
    );
  }
}

export default ParallelogramHeader;