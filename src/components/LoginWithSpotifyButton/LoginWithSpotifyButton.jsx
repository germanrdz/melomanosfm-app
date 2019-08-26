import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSpotify } from 'react-icons/fa';

const handleOnClick = () => {
  window.location.href = `${process.env.REACT_APP_API_URL}/auth/spotify/login`;
};

const LoginWithSpotifyButton = () => (
  <Button
    variant="info"
    size="lg"
    onClick={handleOnClick}>
      <FaSpotify className="mr-2" />
      Inicia sesión con tu cuenta de Spotify
  </Button>
);

export default LoginWithSpotifyButton;
