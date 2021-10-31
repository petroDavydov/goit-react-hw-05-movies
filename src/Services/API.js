import axios from 'axios';
const API_KEY = '982ddb93c577e75ac9a1a097cd74f8a5';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// список самых популярных фильмов на сегодня для создания коллекции на главной странице.

const fetchTrendingMovie = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return results;
  } catch (error) {
    console.log(error.message);
  }
};

//поиск кинофильма по ключевому слову на странице фильмов.

const fetchSearchMovie = async query => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`,
    );
    return results;
  } catch (error) {
    console.log(error.message);
  }
};

//запрос полной информации о фильме для страницы кинофильма.

const fetchMovieById = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

//запрос информации о актёрском составе для страницы кинофильма.

const fetchMovieByCast = async movieId => {
  try {
    const result = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    return result.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

//запрос обзоров для страницы кинофильма.

const fetchMovieByReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    );
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const Api = {
  fetchTrendingMovie,
  fetchSearchMovie,
  fetchMovieById,
  fetchMovieByCast,
  fetchMovieByReviews,
};

export default Api;
