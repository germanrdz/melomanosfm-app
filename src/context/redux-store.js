import { applyMiddleware, compose, createStore } from 'redux';
//import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  rootReducer,
  /* preloadedState, */ // composeEnhancers(applyMiddleware(thunk)),
  /* preloadedState, */ composeEnhancers(),
);

export default reduxStore;
