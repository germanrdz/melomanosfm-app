/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import decode from 'jwt-decode';

import { storage } from '../../services/storage';
import { loginSuccess, updateToken } from '../../redux/session';

const AuthSuccess = ({ match, loginSuccessAction, updateTokenAction }) => {
  useEffect(() => {
    const token = match.params.token;
    const user = decode(token);

    storage.headers = {
      'access-token': token,
    };
    storage.user = user;

    loginSuccessAction(user);
    updateTokenAction(token);
  }, []);

  return (<Redirect to="/" />);
};

export default connect(
  null,
  {
    loginSuccessAction: loginSuccess,
    updateTokenAction: updateToken,
  },
)(AuthSuccess);
