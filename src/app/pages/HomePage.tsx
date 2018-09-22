import * as React from 'react';
import {connect} from 'react-redux';
import PageTemplate from '../base/components/PageTemplate/PageTemplate';

class HomePage extends React.Component {
  render() {
    return (
      <PageTemplate>
        HomePage
      </PageTemplate>
    );
  }
}

export default connect(
    () => ({}),
    () => ({})
)(HomePage);