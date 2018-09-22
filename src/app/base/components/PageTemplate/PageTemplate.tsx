import * as React from 'react';
import styles from './PageTemplate.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
}

class PageTemplate extends React.Component<Props> {
  render() {
    const {children} = this.props;

    return (
      <div className={cx('PageTemplate')}>
        <main>{children}</main>
      </div>
    );
  }
}

export default PageTemplate;