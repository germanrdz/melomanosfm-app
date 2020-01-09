/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

import { storage } from '../../services/storage';
import { loginSuccess, updateToken } from '../../redux/session';

const AuthSuccess = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = match.params;
    const user = decode(token);

    storage.headers = {
      'access-token': token,
    };
    storage.user = user;

    dispatch(loginSuccess(user));
    dispatch(updateToken(token));
  }, [dispatch]);

  return <Redirect to="/" />;
};

AuthSuccess.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default AuthSuccess;
