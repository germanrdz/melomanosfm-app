import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { playlistPropType } from '../../constants/custom-proptypes';
import './playlists.scss';

const Playlists = ({ playlists }) => (
  <div className="playlists">
    <ul>
      {
        playlists.map(p => (
          <li key={p.id}>
            <img src={p.images[0].url} alt={p.images[0].name} />
            <a target="_blank" rel="noopener noreferrer" href={p.external_urls.spotify}>{p.name}</a>
          </li>
        ))
      }
    </ul>
  </div>
);

Playlists.propTypes = {
  playlists: PropTypes.arrayOf(playlistPropType).isRequired,
};

const mapStateToProps = ({ spotify }) => ({
  playlists: spotify.playlists,
});

export default connect(
  mapStateToProps,
  {},
)(Playlists);
