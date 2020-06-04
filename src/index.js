import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import store from './store';
import history from './history';
import * as routes from './routes';
import './styles/global.less';


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        { Object.values(routes) }
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
