/*
 ****************************************************************
 ********************    UNBOXD API    ************************
 ****************************************************************
 */

import axios from 'axios';

// UNBOXD BASE_URL LINK
export const ENV_VARIABLES = {
  UNBOXD_BASE_URL: process.env.REACT_APP_PUBLIC_UNBOXD_BASE_URL,
  AUTH_TOKEN: process.env.NEXT_PUBLIC_AUTH_TOKEN,
};

// Set config defaults when creating the instance
const API = axios.create({
  baseURL: ENV_VARIABLES.UNBOXD_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// API.interceptors.request.use((config) => {
//   const token = cookie.get(ENV_VARIABLES.AUTH_TOKEN!);
//   config.headers['Authorization'] = `Bearer ${token}`;
//   return config;
// });

export default API;
