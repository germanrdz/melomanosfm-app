import React from 'react';
import LoginWithSpotifyButton from '../../components/LoginWithSpotifyButton/LoginWithSpotifyButton';

import './home.scss';

function Home() {
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

export default Home;
