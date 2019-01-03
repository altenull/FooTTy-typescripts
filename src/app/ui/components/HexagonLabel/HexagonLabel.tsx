import * as React from 'react';
import styles from './HexagonLabel.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  imgUrl: string | null;
  mainHeader: string;
  subHeader: string | null;
}

class HexagonLabel extends React.Component<Props> {
  render() {
    const {imgUrl, mainHeader, subHeader} = this.props;
    const hexagonStyle = {
      backgroundImage: `url(${imgUrl ? imgUrl : 'undefined'})`
    };

    return (
      <div className={cx('HexagonLabel')}>

        <div className={cx('HexagonLabel__hexagon-shadower--right')}>
          <div className={cx('HexagonLabel__hexagon-shadower--left')}>
            <div className={cx('HexagonLabel__hexagon')} style={hexagonStyle}/>
          </div>
        </div>

        <div className={cx('HexagonLabel__header-group')}>
          <h3>
            {mainHeader}
          </h3>
          {
            subHeader &&
            <h4>
              {subHeader}
            </h4>
          }
        </div>
      </div>
    );
  }
}

export default HexagonLabel;