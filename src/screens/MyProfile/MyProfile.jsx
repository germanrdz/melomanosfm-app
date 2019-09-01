/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userPropType } from '../../constants/custom-proptypes';
import { getMyPlaylists, getMyTopArtists } from '../../ducks/spotify';
import Playlists from '../../components/Playlists/Playlists';
import TopArtists from '../../components/TopArtists/TopArtists';

import './my-profile.scss';

const MyProfile = ({ user, getMyPlaylistsAction, getMyTopArtistsAction }) => {
  useEffect(() => {
    getMyPlaylistsAction();
    getMyTopArtistsAction();
  }, []);

  return (
    <div id="my-profile">
      <h1>My Profile</h1>
      <img src={user.image} className="picture" alt={user.name} />
      <div className="info">
        <ul>
          <li>
            <strong>Display name:</strong>
            <span>{user.name}</span>
          </li>
          <li>
            <strong>Id:</strong>
            <span>{user.spotifyId}</span>
          </li>
          <li>
            <strong>Email:</strong>
            <span>{user.email}</span>
          </li>
          <li>
            <strong>Spotify URI:</strong>
            <span><a href={user.spotifyUrl}>{user.spotifyUrl}</a></span>
          </li>
        </ul>
      </div>

      <div className="my-playlists mt-4">
        <h2>My Playlists</h2>
        <Playlists />
      </div>

      <div className="my-top-artists mt-4">
        <h2>My Top Artists</h2>
        <TopArtists />
      </div>
    </div>
  );
};

MyProfile.propTypes = {
  getMyPlaylistsAction: PropTypes.func.isRequired,
  getMyTopArtistsAction: PropTypes.func.isRequired,

  user: userPropType.isRequired,
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, {
  getMyPlaylistsAction: getMyPlaylists,
  getMyTopArtistsAction: getMyTopArtists,
})(MyProfile);
