import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { gridCellPropType } from '../../constants/custom-proptypes';
import Grid from '../Grid/Grid';

const TopArtists = ({ topArtists }) => (
  <div className="top-artists">
    <Grid items={topArtists} />
  </div>
);

TopArtists.propTypes = {
  topArtists: PropTypes.arrayOf(gridCellPropType).isRequired,
};

const mapStateToProps = ({ spotify }) => ({
  topArtists: spotify.topArtists,
});

export default connect(
  mapStateToProps,
  {},
)(TopArtists);
