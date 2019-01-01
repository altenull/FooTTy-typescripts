import * as React from 'react';
import {withLocale} from '../../contexts/localeContext';

import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import ParallelogramHeader from '../base/components/ParallelogramHeader/ParallelogramHeader';
import TwoColumnTemplate from '../base/components/TwoColumnTemplate/TwoColumnTemplate';

class TeamPage extends React.Component {
  render() {
    const pageHeaderCopy: string = 'Team Page';
    const pageHeader: React.ReactNode = <ParallelogramHeader copy={pageHeaderCopy}/>;

    return (
        <PageTemplate pageHeader={pageHeader}>
          <TwoColumnTemplate left={<div>Team page Left</div>}
                             right={<div>Team page Right</div>}/>
        </PageTemplate>
    );
  }
}

export default withLocale(TeamPage);