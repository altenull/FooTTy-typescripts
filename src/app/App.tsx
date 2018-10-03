import * as React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LeaguePage from './pages/LeaguePage';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path={'/'} component={HomePage} exact={true}/>
          <Route path={'/:league'} component={LeaguePage}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
