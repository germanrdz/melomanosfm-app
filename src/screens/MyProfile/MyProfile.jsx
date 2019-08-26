import React from 'react';
import { connect } from 'react-redux';

import './my-profile.scss';

const MyProfile = ({ user }) => (
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
  </div>
);

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, {})(MyProfile);
