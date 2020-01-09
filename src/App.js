import React from 'react';
import styled from '@emotion/styled';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import reduxStore from './context/redux-store';
import GlobalStyle from './components/styled/GlobalStyle';

require('dotenv').config();

const Container = styled.div`
  padding: 0px 20px 0;
  width: calc(100% - 40px);
`;

const App = () => (
  <Provider store={reduxStore}>
    <GlobalStyle />
    <Container>
      <AppRoutes />
    </Container>
  </Provider>
);

export default App;
