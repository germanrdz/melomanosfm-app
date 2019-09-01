import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gridCellPropType } from '../../constants/custom-proptypes';
import Grid from '../Grid/Grid';

const Playlists = ({ playlists }) => (
  <div className="playlists">
    { playlists && <Grid items={playlists} /> }
  </div>
);

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(gridCellPropType).isRequired,
};

const mapStateToProps = ({ spotify }) => ({
  playlists: spotify.playlists,
});

export default connect(
  mapStateToProps,
  {},
)(Playlists);
