import React from 'react';
import { FaSpotify } from 'react-icons/fa';

import { PrimaryButton } from './styled/Button';

const handleOnClick = () => {
  window.location.href = `${process.env.REACT_APP_API_URL}/auth/spotify/login`;
};

const LoginWithSpotifyButton = () => (
  <PrimaryButton onClick={handleOnClick}>
    <FaSpotify />
    Inicia sesión con Spotify
  </PrimaryButton>
);

export default LoginWithSpotifyButton;
