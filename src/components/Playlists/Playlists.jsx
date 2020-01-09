import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import Grid from '../Grid/Grid';
import { getPlaylists } from '../../redux/spotify';

const Container = styled.div`
  text-align: center;
`;

const Playlists = () => {
  const playlists = useSelector(getPlaylists);
  return <Container>{playlists && <Grid items={playlists} />}</Container>;
};

export default Playlists;
