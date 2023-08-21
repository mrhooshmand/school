import axios from 'axios';

const api = axios.create({
  baseURL: "https://www.rahtap.ir"
});

export default api;