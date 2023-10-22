import { shortMovieDuration } from "./config";

function editMovieUrl(movie) {
  movie = `https://api.nomoreparties.co${movie.image.url}`;
  return movie;
}

function editMovieThumbnail(movie) {
  movie = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
  return movie;
}

function editMovieDuration(duration) {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= shortMovieDuration);
}

function findMovies(movies, words, shortSearched) {
  const filteredMovies = movies.filter((movie) => {
    let isSuitableValue = false;
    if (movie.nameRU) {
      isSuitableValue = String(movie.nameRU)
        .toLowerCase()
        .includes(words.toLowerCase());
    } else if (movie.nameEN) {
      isSuitableValue = movie.nameEN
        .toLowerCase()
        .includes(words.loLowerCase());
    }
    return isSuitableValue;
  });
  if (shortSearched) {
    return filterShortMovies(filteredMovies);
  } else {
    return filteredMovies;
  }
}

function checkSavedMovie(savedMovies, movie) {
  return savedMovies.find((savedMovie) => {
    return savedMovie.movieId === movie.id;
  });
}

export {
  editMovieUrl,
  editMovieThumbnail,
  editMovieDuration,
  filterShortMovies,
  findMovies,
  checkSavedMovie,
};
