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

const HomeRoutes = () => (
  <Router>
    <Header />

    <Container>
      <Switch>
        <Route path="/" exact component={Home} />

        { /* Catch-All */ }
        <Redirect from="*" to="/" />
      </Switch>
    </Container>

    <Footer />
  </Router>
);

export default HomeRoutes;
