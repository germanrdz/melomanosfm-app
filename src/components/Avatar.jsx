import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { userPropType } from '../constants/custom-proptypes';

// const Avatar = ({ user, height }) => (
//   <img className="ml-1 rounded-circle" height={height} src={user.image} alt={user.name} />
// );

// Avatar.defaultProps = {
//   height: 20,
// };

// Avatar.propTypes = {
//   user: userPropType.isRequired,
//   height: PropTypes.number,
// };

const Img = styled.img`
  border-radius: 50%;
  margin: .25em;
`;

const Avatar = ({ height, user }) => {
  if (!user) return null;
  return <Img height={height} src={user.image} alt={user.name} />
};

Avatar.defaultProps = {
  height: 50,
};

Avatar.propTypes = {
  user: userPropType.isRequired,
  height: PropTypes.number,
};

export default Avatar;
