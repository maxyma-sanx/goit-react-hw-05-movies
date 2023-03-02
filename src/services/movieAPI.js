import axios from 'axios';

export const API_KEY = 'b5dbc40d665affe8ed0bac71106b3fa8';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
  params: {
    api_key: API_KEY,
  },
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, params);

  return data;
};

export const fetchSearchMovies = async movie => {
  const { data } = await axios.get(`search/movie?query=${movie}`, params);

  return data;
};

export const fetchMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, params);

  return data;
};

export const fetchMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, params);

  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, params);

  return data;
};
