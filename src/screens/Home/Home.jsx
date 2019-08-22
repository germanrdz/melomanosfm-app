/* eslint-disable quote-props */
import React from 'react';
import { connect } from 'react-redux';

import './home.scss';

const Home = () => {
  return (
    <div id="home" className="text-center">
      <div className="hero">
        <h1>Melomanos FM</h1>
        <p className="lead">
          Deja que la música nos una.
        </p>
        <div className="actions mt-5">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

/*
Home.propTypes = {
  session: sessionType.isRequired,
};

const mapStateToProps = ({ session }) => ({
  session,
});

export default connect(
  mapStateToProps,
  {},
)(Home);
*/

export default Home;
