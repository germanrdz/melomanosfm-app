import React from 'react';
import { Global, css } from '@emotion/core';

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    font-family: Montserrat;
    font-size: 16px;
    background: #090b12;
    color: #FFF;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyle = () => (<Global styles={styles} />);

export default GlobalStyle;
