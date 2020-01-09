import React from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { logoutUser } from '../redux/session';
import { storage } from '../services/storage';

const Container = styled.ul`
  list-style: none;
  padding: 0;

  color: #FFF;
  background-color: #090b12;

  border: 1px solid #232425;

  width: 10em;
`;

const Item = styled.li`
  padding: 0.5em 0 0.5em 1em;

  :hover {
    background-color: #151515;
  }
`;

const LoggedUser = styled.li`
  padding: 0.5em 0 0.5em 1em;
  font-weight: bold;
  font-size: 0.875em;
`;

const HeaderMenu = ({ user }) => {
  const dispatch = useDispatch();

  const logoutClickHandler = () => {
    storage.clear();
    dispatch(logoutUser());
  };

  return (
    <Container>
      <LoggedUser>{user.name}</LoggedUser>
      <Item onClick={logoutClickHandler}>Cerrar Sesión</Item>
    </Container>
  );
};

export default HeaderMenu;
