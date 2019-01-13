import * as React from 'react';
import styles from './HexagonLabel.scss';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  id: string;
  imgUrl: string | null;
  label: string;
  onSelectPlayer(playerId: string): void;
}

class HexagonLabel extends React.Component<Props> {
  render() {
    const {id, imgUrl, label, onSelectPlayer} = this.props;
    const hexagonStyle = {
      backgroundImage: `url(${imgUrl ? imgUrl : 'undefined'})`
    };

    return (
      <div className={cx('HexagonLabel')} onClick={() => onSelectPlayer(id)}>
        <div className={cx('HexagonLabel__hexagon-cutter--right')}>
          <div className={cx('HexagonLabel__hexagon-cutter--left')}>
            <div className={cx('HexagonLabel__hexagon')} style={hexagonStyle}/>
            <div className={cx('HexagonLabel__hexagon-curtain')}>
              <span>
                {label}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HexagonLabel;