/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const userPropType = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  spotifyId: PropTypes.string,
  spotifyUrl: PropTypes.string,
});

export const playlistPropType = PropTypes.shape({
  collaborative: PropTypes.bool,
  external_urls: PropTypes.shape({
    spotify: PropTypes.string,
  }),
  href: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape({
    height: PropTypes.number,
    url: PropTypes.string,
    width: PropTypes.number,
  })),
  name: PropTypes.string,
  owner: PropTypes.shape({
    display_name: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    href: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    uri: PropTypes.string,
  }),
  primary_color: PropTypes.string,
  snapshot_id: PropTypes.string,
  tracks: PropTypes.shape({
    href: PropTypes.string,
    total: PropTypes.number,
  }),
  type: PropTypes.string,
  uri: PropTypes.string,
});

export const session = PropTypes.shape({
  headers: PropTypes.shape({
    'access-token': PropTypes.string,
  }),
  user: userPropType,
});
