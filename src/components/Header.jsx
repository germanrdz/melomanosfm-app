import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FiHeadphones } from 'react-icons/fi';
import { getUser } from '../redux/session';
import Avatar from './Avatar';
import Toggle from './shared/Toggle';
import HeaderMenu from './HeaderMenu';

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0.5em 0;
  margin-bottom: 0.5em;

  a {
    color: #FFF;
  }
`;

const Logo = styled.div`
  font-size: 30px;
`;

const Header = () => {
  const user = useSelector(getUser);

  return (
    <Container>
      <Logo>
        <Link to="/">
          <FiHeadphones />
        </Link>
      </Logo>
      {
        user && (
          <Toggle content={<HeaderMenu user={user} />}>
            <Avatar user={user} height={30} />
          </Toggle>
        )
      }
    </Container>
  );
};

export default Header;
