/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlaylists } from '../../ducks/spotify';
import Playlists from '../../components/Playlists/Playlists';

import './my-profile.scss';

const MyProfile = ({ user, getPlaylistsAction }) => {
  useEffect(() => {
    getPlaylistsAction();
  }, []);

  return (
    <div id="my-profile">
      <h1>My Profile</h1>
      <img src={user.image} className="picture" alt={user.name} />
      <div className="info">
        <ul>
          <li><strong>Display name:</strong><span>{user.name}</span></li>
          <li><strong>Id:</strong><span>{user.spotifyId}</span></li>
          <li><strong>Email:</strong><span>{user.email}</span></li>
          <li><strong>Spotify URI:</strong><span><a href={user.spotifyUrl}>{user.spotifyUrl}</a></span></li>
        </ul>
      </div>

      <div className="playlists mt-5">
        <h2>My Playlists</h2>
        <Playlists />
      </div>
    </div>
  );
}


const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, {
  getPlaylistsAction: getPlaylists,
})(MyProfile);
