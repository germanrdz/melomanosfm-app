import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import ducksReducer from 'ducks-reducer';

import * as session from '../ducks/session';
import * as spotify from '../ducks/spotify';
import { getPlaylistsEpic } from '../ducks/spotify';

const rootReducer = ducksReducer({ session, spotify });
const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  getPlaylistsEpic,
);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default reduxStore;
