import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import reduxStore from './context/redux-store';
import GlobalStyle from './components/styled/GlobalStyle';

require('dotenv').config();

const App = () => (
  <Provider store={reduxStore}>
    <GlobalStyle />
    <AppRoutes />
  </Provider>
);

export default App;
