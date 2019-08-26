import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const printError = errorType => {
  console.log(errorType);
  let errorMsg = '';

  switch (errorType) {
    case 'state_mismatch':
      errorMsg = 'Spotify API state mismatch';
      break;
    case 'invalid_token':
      errorMsg = 'Authentication token for Spotify API is invalid.'
      break;
    case 'user_create':
      errorMsg = 'An error has ocurred while creating the user in our database';
      break;
    default:
      errorMsg = 'An unknown error has ocurred during authentication.'
      break;
  }

  return <Alert variant="danger">{errorMsg}</Alert>
}

const AuthError = ({ match }) => (
  <>
    <h1>Authentication Error</h1>
    { printError(match.params.errorType) }

    <Link to="/">Go back home.</Link>
  </>
);

export default AuthError;
