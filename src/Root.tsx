import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import App from './app/App';
import {startSaga} from './store/configure';

class Root extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      startSaga();
    }, 2000);
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