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

export const gridCell = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
});

export const session = PropTypes.shape({
  headers: PropTypes.shape({
    'access-token': PropTypes.string,
  }),
  user: userPropType,
});
