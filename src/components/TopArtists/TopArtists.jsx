import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '../Grid/Grid';
import { getTopArtists } from '../../redux/spotify';

const TopArtists = () => {
  const topArtists = useSelector(getTopArtists);

  return (
    <div className="top-artists">
      <Grid items={topArtists} />
    </div>
  );
};

export default TopArtists;
