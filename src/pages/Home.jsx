import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import MyProfile from './MyProfile';
import LoginWithSpotifyButton from '../components/LoginWithSpotifyButton';
import { getSession } from '../redux/session';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  text-align: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  font-size: 1em;
`;

const Actions = styled.div`
  margin: 2em 0;
`;

const Home = () => {
  const session = useSelector(getSession);
  if (session && session.user) return <MyProfile />;

  return (
    <Container>
      <Title>Melomanos FM</Title>
      <Subtitle>
        Abre tu cuenta y descubre nueva música.
      </Subtitle>
      <Actions>
        <LoginWithSpotifyButton />
      </Actions>
    </Container>
  );
};

export default Home;
