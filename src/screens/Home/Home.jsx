import React from 'react';
import { connect } from 'react-redux';

import LoginWithSpotifyButton from '../../components/LoginWithSpotifyButton/LoginWithSpotifyButton';
import MyProfile from '../MyProfile/MyProfile';
import { userPropType } from '../../constants/custom-proptypes';
import './home.scss';

const Home = ({ session }) => {
  if (session.user) {
    return <MyProfile />;
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

Home.propTypes = {
  session: userPropType.isRequired,
};

const mapStateToProps = ({ session }) => ({
  session,
});

export default connect(mapStateToProps, {})(Home);
