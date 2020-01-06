import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { FiHeadphones } from 'react-icons/fi';
import { logoutUser, getUser } from '../redux/session';
import { storage } from '../services/storage';
import Avatar from './Avatar';

const Container = styled.div`
  display: flex;
  font-size: 1.3em;

  padding: 0.5em 0;
  margin-bottom: 0.5em;

  a {
    color: #FFF;
  }
`;

const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    storage.clear();
    dispatch(logoutUser());
  };

  return (
    <Container>
      <Link to="/">
        <FiHeadphones />
      </Link>
      {
        user && (
          <>
            <Avatar user={user} height={20} />
            <Link onClick={logoutClickHandler}>logout</Link>
          </>
        )
      }
    </Container>
  );
};

export default Header;
