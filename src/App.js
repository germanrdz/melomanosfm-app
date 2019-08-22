import React from 'react';
import { Provider } from 'react-redux';

import AppRoutes from './routes/AppRoutes';
import reduxStore from './context/redux-store';

import './bootstrap-custom.scss';

require('dotenv').config();

function App() {
  return (
    <Provider store={reduxStore}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
