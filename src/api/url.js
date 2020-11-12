const ROOT_URL = "https://api.themoviedb.org/3";
const API_KEY = "330f085e0745d5b685811654fe129dc3";
const IMAGE_URL = "https://image.tmdb.org/t/p/";

export const getPopularMoviesUrl = () => `${ROOT_URL}/movie/popular?api_key=${API_KEY}`;

export const getImageUrl = (path, key = "uri", width = "w500") => {
  return { [key]: `${IMAGE_URL}${width}${path}` };
};