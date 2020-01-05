import React from 'react';

import { PrimaryButton } from '../components/styled/Button';
import { FaSpotify } from 'react-icons/fa';

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
