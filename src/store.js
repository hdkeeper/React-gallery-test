import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import reducers from './reducers';
import * as sagas from './sagas';
import history from './history';


const sagaMiddleware = createSagaMiddleware();
const sagaConnect = () => Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));

const composeEnhancers = (typeof window === 'object')
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middleware = composeEnhancers(
  applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger,
    sagaMiddleware
  )
);

const createStoreWithMiddleware = middleware(createStore);

const store = createStoreWithMiddleware(reducers);

sagaConnect();

export default store;
