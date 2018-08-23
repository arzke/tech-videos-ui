import axios from 'axios';

const apiService = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

export default apiService;
