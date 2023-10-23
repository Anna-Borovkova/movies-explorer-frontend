import "./Movies.css";
import { useContext, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { moviesApi } from "../../utils/Api/MoviesApi";
import { localStorageNames } from "../../utils/config";
import { findMovies } from "../../utils/utils";
import CurrentUserContext from "../../context/CurrentUserContext";

function Movies(props) {
  const currentUser = useContext(CurrentUserContext);

  const [areShortMoviesSearched, setAreShortMoviesSearched] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function filterMovies(movies, words, shortSearched) {
    const foundMovies = findMovies(movies, words, shortSearched);
    if (foundMovies.length === 0) {
      setNotFound(true);
      setResultMessage("Ничего не найдено");
    } else {
      setNotFound(false);
    }
    setFilteredMovies(foundMovies);
    localStorage.setItem(
      `${localStorageNames.filteredMovies}`,
      JSON.stringify(foundMovies)
    );
  }

  function handleSearchMovies(words) {
    setKeywords(words);
    localStorage.setItem(`${localStorageNames.keywords}`, words);
    localStorage.setItem(
      `${localStorageNames.areShortMoviesSearched}`,
      areShortMoviesSearched
    );

    if (initialMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setInitialMovies(movies);
          filterMovies(movies, words, areShortMoviesSearched);
        })
        .catch(() => {
          setNotFound(true);
          setResultMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterMovies(initialMovies, words, areShortMoviesSearched);
    }
  }

  function handleSearchShortMovies(words) {
    setAreShortMoviesSearched(!areShortMoviesSearched);
    localStorage.setItem(
      `${localStorageNames.areShortMoviesSearched}`,
      !areShortMoviesSearched
    );
    setKeywords(words);
    localStorage.setItem(`${localStorageNames.keywords}`, words);
    if (initialMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getAllMovies()
        .then((movies) => {
          setInitialMovies(movies);
          filterMovies(movies, words, !areShortMoviesSearched);
        })
        .catch(() => {
          setNotFound(true);
          setResultMessage(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      filterMovies(initialMovies, words, !areShortMoviesSearched);
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem(`${localStorageNames.areShortMoviesSearched}`) ===
      "true"
    ) {
      setAreShortMoviesSearched(true);
    } else {
      setAreShortMoviesSearched(false);
    }
  }, [currentUser]);

  useEffect(() => {
    const previousKeywords = localStorage.getItem(
      `${localStorageNames.keywords}`
    );
    if (previousKeywords) {
      setKeywords(previousKeywords);
    } else {
      setKeywords("");
    }
  }, [currentUser, filteredMovies]);

  useEffect(() => {
    const previousMovies = JSON.parse(
      localStorage.getItem(`${localStorageNames.filteredMovies}`)
    );
    if (previousMovies) {
      setFilteredMovies(previousMovies);
    } else {
      setFilteredMovies([]);
    }
  }, [currentUser, areShortMoviesSearched]);

  return (
    <div className="movies">
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        areShortMoviesSearched={areShortMoviesSearched}
        handleSearchShortMovies={handleSearchShortMovies}
        keywords={keywords}
      />
      {notFound ? (
        <div className="movies__not-found">{resultMessage}</div>
      ) : (
        <MoviesCardList
          filteredMovies={filteredMovies}
          savedMovies={props.savedMovies}
          onSaveMovieClick={props.onSaveMovieClick}
          onDeleteMovieClick={props.onDeleteMovieClick}
        ></MoviesCardList>
      )}
      {isLoading ? <Preloader /> : null}
    </div>
  );
}

export default Movies;
