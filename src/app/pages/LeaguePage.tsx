import * as React from 'react';
import PageTemplate from '../base/components/PageTemplate/PageTemplate';
import {RouteProps} from 'react-router-dom';

// interface Props {
// }

class LeaguePage extends React.Component<any & RouteProps> {
  constructor(props: any) {
    super(props);
    const {match} = this.props;

    console.log(match.params.league);
  }

  render() {
    return (
      <PageTemplate>
        LeaguePage
      </PageTemplate>
    );
  }
}

export default LeaguePage;