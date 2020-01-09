import React from 'react';
import { Global, css } from '@emotion/core';

const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

  body {
    font-family: Montserrat;
    font-size: 16px;
    background: #090b12;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  button {
    font-size: 1rem;
  }
`;

const GlobalStyle = () => <Global styles={styles} />;

export default GlobalStyle;
