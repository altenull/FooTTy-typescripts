import * as React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import * as Loadable from 'react-loadable';

const HomePage = Loadable({
  loader: () => import('./pages/HomePage'),
  loading: () => null
});

const LeaguePage = Loadable({
  loader: () => import('./pages/LeaguePage'),
  loading: () => null
});

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path={'/'}
            render={({location}) => {
              const searchParams = new URLSearchParams(location.search);
              const lang: string | null = searchParams.get('lang');

              // TODO: Provide language to Context Provider.
              console.log('lang', lang);

              return (
                <>
                  <Route path={'/'} component={HomePage} exact={true}/>
                  <Route path={'/:league'} component={LeaguePage}/>
                </>
              );
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
