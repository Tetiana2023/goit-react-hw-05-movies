import axios from 'axios';

const API_KEY = 'bbea7a3ac9cdb2664b79706c047bd6be';
const BASE_URL = 'https://api.themoviedb.org/3/';

 const getTrendingMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};

const getSearchMovie = async (search) => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}&language=en-US&page=1`
  );
  return response.data;
};

 const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
 const getMovieCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};
export {
    getTrendingMovie,
  getSearchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
