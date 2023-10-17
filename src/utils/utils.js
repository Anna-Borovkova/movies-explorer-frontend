import { shortMovieDuration } from "./config";

function editMovieUrl(initialMovies) {
  initialMovies.forEach((movie) => {
    movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    movie.image = `https://api.nomoreparties.co${movie.image.url}`;
  });
  return initialMovies;
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

function filterShortMovies(initialMovies) {
  return initialMovies.filter((movie) => movie.duration <= shortMovieDuration);
}

function findMovies(initialMovies, keyWord) {
  return initialMovies.filter((movie) => {
    let isSuitableValue = false;
    if (movie.nameRu) {
      isSuitableValue = movie.nameRu
        .loLowerCase()
        .includes(keyWord.loLowerCase());
    } else if (movie.nameEn) {
      isSuitableValue = movie.nameEn
        .loLowerCase()
        .includes(keyWord.loLowerCase());
    }
    return isSuitableValue;
  });
}

export { editMovieUrl, editMovieDuration, filterShortMovies, findMovies };
