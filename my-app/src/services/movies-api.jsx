import axios from "axios";

const key = "684a168c8e7f797395d8a1d5291bcabb";

export const fetchTrendingMovies = () => {
   return axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
    .then(data => data.data);
};

export const fetchMoviesById = (id) => {
   return axios
     .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`)
     .then(data => data.data);
 };

export const fetchCastById = (id) => {
   return axios
     .get(
       `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}`
     )
     .then(data => data.data);
};

export const fetchReviewsById = (id) => {
   return axios
     .get(
       `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
     )
     .then(data => data.data);
};

export const fetchMoviesByQuery = (query) => {
   return axios
     .get(
       `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
     )
     .then(data => data.data);
};