import React from 'react';
import { connect } from 'react-redux';
import LoginWithSpotifyButton from '../../components/LoginWithSpotifyButton/LoginWithSpotifyButton';
import MyProfile from '../MyProfile/MyProfile';

import './home.scss';

function Home({ session }) {
  if (session.user) {
    return <MyProfile />
  }

  return (
    <div id="home" className="text-center">
      <div className="hero">
        <h1>Melomanos FM</h1>
        <p className="lead">
          Abre tu cuenta y descubre nueva musica.
        </p>
        <div className="actions mt-5">
          <LoginWithSpotifyButton />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  session,
});

export default connect(mapStateToProps, {})(Home);
