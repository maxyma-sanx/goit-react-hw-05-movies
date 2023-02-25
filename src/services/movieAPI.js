import axios from 'axios';

const API_KEY = 'b5dbc40d665affe8ed0bac71106b3fa8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
  },
};

const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/day`, params);

  return data;
};

const fetchSearchMovies = async signal => {
  const { data } = await axios.get(`search/movie`, params);

  return data;
};

const fetchMovieDetails = async (signal, id) => {
  const { data } = await axios.get(`movie/${id}`, params);

  return data;
};

const fetchMovieCredits = async (signal, id) => {
  const { data } = await axios.get(`movie/${id}/credits`, params);

  return data;
};

const fetchMovieReviews = async (signal, id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, params);

  return data;
};

export {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
