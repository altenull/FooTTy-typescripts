import * as React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import * as Loadable from 'react-loadable';
import {LocaleProvider} from '../contexts/localeContext';

const HomePage = Loadable({
  loader: () => import('./pages/HomePage'),
  loading: () => null
});

const LeaguePage = Loadable({
  loader: () => import('./pages/LeaguePage'),
  loading: () => null
});

const TeamPage = Loadable({
  loader: () => import('./pages/TeamPage'),
  loading: () => null
});

class App extends React.Component {
  lang: string | null = null;

  getLanguage = (locationSearch: string): string | null => {
    const searchParams = new URLSearchParams(locationSearch);
    this.lang = this.lang ? this.lang : searchParams.get('lang');

    return this.lang;
  };

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path={'/'}
                 render={({location}) => {
                   return (
                     <LocaleProvider lang={this.getLanguage(location.search)}>
                       <Route path={'/'} component={HomePage} exact={true}/>
                       <Route path={'/:league'} component={LeaguePage} exact={true}/>
                       <Route path={'/:league/:team'} component={TeamPage} exact={true}/>
                     </LocaleProvider>
                   );
                 }}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
