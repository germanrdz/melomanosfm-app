import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers';

const epicMiddleware = createEpicMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(epicMiddleware)),
);

export default reduxStore;
