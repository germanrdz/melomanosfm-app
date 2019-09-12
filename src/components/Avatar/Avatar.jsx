import React from 'react';
import PropTypes from 'prop-types';
import { userPropType } from '../../constants/custom-proptypes';

const Avatar = ({ user, height }) => (
  <img className="ml-1 rounded-circle" height={height} src={user.image} alt={user.name} />
);

Avatar.defaultProps = {
  height: 20,
};

Avatar.propTypes = {
  user: userPropType.isRequired,
  height: PropTypes.number,
};

export default Avatar;
