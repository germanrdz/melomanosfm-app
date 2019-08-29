import Axios from 'axios-observable';
import { storage } from './storage';

const ApiClient = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

ApiClient.interceptors.request.use(
  (config) => {
    const { headers } = storage;
    const newConfig = config;

    if (headers) {
      newConfig.headers['access-token'] = headers['access-token'];
    }

    return newConfig;
  },
  (error) => Promise.reject(error),
);

// TODO: response interceptor checking for possible failed auth
/* ApiClient.interceptos.response.use() */

export default ApiClient;
