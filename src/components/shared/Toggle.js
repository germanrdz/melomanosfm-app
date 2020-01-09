/* usage:
 *   const component = <p>Tooltip text</p>;
 *   <Toggle content={component}>Hover to tooltip</Tooltip>
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.span`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 100%;
`;

const Toggle = ({ children, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container onClick={handleClick}>
      {children}
      {isOpen && <Content>{content}</Content>}
    </Container>
  );
};

Toggle.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Toggle;
