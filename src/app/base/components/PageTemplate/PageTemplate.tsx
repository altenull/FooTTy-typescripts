import * as React from 'react';
import styles from './PageTemplate.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  pageHeader?: React.ReactNode;
  children: React.ReactNode;
}

class PageTemplate extends React.Component<Props> {
  render() {
    const {pageHeader, children} = this.props;

    return (
      <div className={cx('PageTemplate')}>
        <header>
          {pageHeader}
        </header>
        <main>
          {children}
        </main>
      </div>
    );
  }
}

export default PageTemplate;