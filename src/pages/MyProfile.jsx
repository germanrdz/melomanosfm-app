import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';

import { getMyPlaylists, getMyTopArtists } from '../redux/spotify';
import Playlists from '../components/Playlists/Playlists';
import TopArtists from '../components/TopArtists/TopArtists';
import { getUser } from '../redux/session';
import Avatar from '../components/Avatar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  text-align: center;
`;

const Title = styled.h1``;

const MyProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(getMyPlaylists());
    dispatch(getMyTopArtists());
  }, [dispatch]);

  return (
    <Container>
      <Profile>
        <Avatar user={user} height={200} />
        <Title>{user.name}</Title>
      </Profile>

      <h2>My Playlists</h2>
      <Playlists />

      <h2>My Top Artists</h2>
      <TopArtists />
    </Container>
  );
};

export default MyProfile;
