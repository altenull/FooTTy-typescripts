import * as React from 'react';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  render() {
    return (
      <>
        HomePage
      </>
    );
  }
}

export default connect(
    () => ({}),
    () => ({})
)(HomePage);
