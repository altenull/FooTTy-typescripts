import * as React from 'react';
import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import LandingTemplate from '../landing/components/LandingTemplate/LandingTemplate';

class HomePage extends React.Component {
  render() {
    return (
      <PageTemplate>
        <LandingTemplate/>
      </PageTemplate>
    );
  }
}

export default HomePage;