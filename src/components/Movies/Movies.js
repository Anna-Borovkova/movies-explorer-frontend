import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AddMovies from "../AddMovies/AddMovies";
import MovieImageFirst from "../../images/movie-image-1.png";
import { moviesApi } from "../../utils/Api/MoviesApi";
import { localStorageNames } from "../../utils/config";
import { editMovieUrl, filterShortMovies } from "../../utils/utils";

function Movies(props) {
  const [areShortMoviesSearched, setShortMoviesSearched] = useState(true);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  // const [filteredShortMovies, setFilteredShortMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  // посмотреть как будет выглядеть поставленный лайк
  const isSaved = true;

  const buttonClassName = isSaved
    ? "movies-card__save-button movies-card__save-button_active"
    : "movies-card__save-button";

  function filterMovies() {}

  function handleSearchMovies(keyword) {
    localStorage.setItem(localStorageNames.keywords, keyword);
    localStorage.setItem(
      localStorageNames.areShortMoviesChosen,
      areShortMoviesSearched
    );
    if (initialMovies === 0) {
      //включаем лоадер
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setInitialMovies(movies);
          filterMovies(
            editMovieUrl(initialMovies),
            keyword,
            areShortMoviesSearched
          );
        })
        .catch(() => {
          setNotFound(true);
          setResultMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally
        //выключаем лоадер
        ();
    } else {
      filterMovies(initialMovies, keyword, areShortMoviesSearched);
    }
    console.log(initialMovies);
    console.log(areShortMoviesSearched);
  }

  function handleSearchShortMovies() {
    setShortMoviesSearched(!areShortMoviesSearched);
    if (areShortMoviesSearched) {
      setFilteredMovies(filterShortMovies(initialMovies));
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem(
      localStorageNames.areShortMoviesSearched,
      areShortMoviesSearched
    );
  }

  return (
    <div className="movies">
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        areShortMoviesSearched={areShortMoviesSearched}
        handleSearchShortMovies={handleSearchShortMovies}
      />
      {notFound ? (
        <div className="movies__not-found">{resultMessage}</div>
      ) : (
        <MoviesCardList
          title="Киноальманах «100 лет дизайна»"
          duration="1ч 42м"
          img={MovieImageFirst}
          trailerLink={""}
        >
          <button className={buttonClassName} />
        </MoviesCardList>
      )}

      <AddMovies />
    </div>
  );
}

export default Movies;
