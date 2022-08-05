import axios from 'axios';
import {Networks} from '../const';

const instance = axios.create({
  baseURL: Networks.BASE_URL,
  headers: {
    Accept: 'application/json'
  }
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
