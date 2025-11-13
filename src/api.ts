import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tp-cicd-back-master.onrender.com', // will call relative endpoints like /authors, /books, etc.
});

export default api;
