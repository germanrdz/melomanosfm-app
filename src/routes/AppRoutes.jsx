import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../screens/Home/Home';

import AuthSuccess from '../components/Auth/AuthSuccess';
import AuthError from '../components/Auth/AuthError';

function HomeRoutes() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />

          { /* Spotify Auth Routes */ }
          <Route path="/auth/success/:token" component={AuthSuccess} />
          <Route path="/auth/error/:errorType" component={AuthError} />

          { /* Catch-All */ }
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default HomeRoutes;
