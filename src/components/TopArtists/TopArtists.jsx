import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TopArtists = ({ topArtists }) => (
  <div className="top-artists">
    <ul>
      {
        topArtists.map((a) => (
          <li key={a.id}>
            <img src={a.images[0].url} alt={a.images[0].name} />
            <a target="_blank" rel="noopener noreferrer" href={a.external_urls.spotify}>
              {a.name}
            </a>
          </li>
        ))
      }
    </ul>
  </div>
);

TopArtists.propTypes = {
  topArtists: PropTypes.arrayOf(PropTypes.shape({

  })).isRequired,
};

const mapStateToProps = ({ spotify }) => ({
  topArtists: spotify.topArtists,
});

export default connect(
  mapStateToProps,
  {},
)(TopArtists);
