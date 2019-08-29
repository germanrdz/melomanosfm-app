/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const userPropType = PropTypes.shape({
  _id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  spotifyId: PropTypes.string,
  spotifyUrl: PropTypes.string,
});
