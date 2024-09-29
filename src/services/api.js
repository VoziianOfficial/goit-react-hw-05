import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGMxYmJiY2Y0ZDMzNmIyMzViMzJlNDQzYjk4YTEzYiIsIm5iZiI6MTcyNzYzNTQxNS40Mzk3NDgsInN1YiI6IjY2Zjk5ZTVlMGExMjIxNTYzMWNjNjY2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gKkLypAMPqxcRGyrV7LlFDjXMu0viE2ikiqPQ8KSKs4";

// Функция для получения трендовых фильмов
export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", {
    params: {
      language: "en-US",
    },
  });
  return response.data.results;
};

// Функция для поиска фильмов по запросу
export const searchMovies = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      language: "en-US",
      include_adult: "false",
      page: "1",
      query,
    },
  });
  return response.data.results;
};

// Функция для получения деталей фильма по ID
export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      language: "en-US",
    },
  });
  return response.data;
};

// Функция для получения актерского состава
export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      language: "en-US",
    },
  });
  return response.data.cast;
};

// Функция для получения обзоров на фильм
export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      language: "en-US",
      page: "1",
    },
  });
  return response.data.results;
};
