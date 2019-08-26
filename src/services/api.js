import axios from 'axios';
import { localStorage } from './sessionStorage';

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

ApiClient.interceptors.request.use(
  (config) => {
    const { headers } = localStorage;
    const newConfig = config;

    if (headers) {
      newConfig.headers['access-token'] = headers['access-token'];
      newConfig.headers['client'] = headers['client'];
      newConfig.headers['uid'] = headers['uid'];
    }

    return newConfig;
  },
  error => Promise.reject(error),
);

// TODO: response interceptor checking for possible failed auth
/* ApiClient.interceptos.response.use() */
