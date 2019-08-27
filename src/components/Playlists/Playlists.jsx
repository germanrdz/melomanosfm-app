import React from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ spotify }) => ({
  playlists: spotify.playlists,
});

export default connect(
  mapStateToProps,
  {},
)(Playlists);
