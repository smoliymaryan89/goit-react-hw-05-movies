import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '6d796137d0cf4f8e538986d0bc0be2a1',
};

const getTrendingMovies = async () => {
  const response = await axios.get('/trending/all/day');
  return response.data;
};

const getMovieDetails = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
};

const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
};

const getMovieByQuery = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data;
};

const API = {
  getTrendingMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
  getMovieByQuery,
};

export default API;
