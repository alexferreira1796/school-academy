import axios from 'axios';
export const baseURL = process.env.REACT_APP_BASEAPP;

const api = axios.create({
  baseURL,
});

export default api;
