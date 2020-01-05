import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../components/Header/Header';
import Home from '../pages/Home';

import AuthSuccess from '../components/Auth/AuthSuccess';
import AuthError from '../components/Auth/AuthError';

const HomeRoutes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />

      { /* Spotify Auth Routes */ }
      <Route path="/auth/success/:token" component={AuthSuccess} />
      <Route path="/auth/error/:errorType" component={AuthError} />

      { /* Catch-All */ }
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default HomeRoutes;
