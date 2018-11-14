import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from './app/App';
import {runSaga} from './store/configure';

class Root extends React.Component {

  componentDidMount() {
    runSaga();
  }

  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}

export default Root;