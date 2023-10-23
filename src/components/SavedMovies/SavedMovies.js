import "./SavedMovies.css";
import { useContext, useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { localStorageNames } from "../../utils/config";
import { findMovies } from "../../utils/utils";
import CurrentUserContext from "../../context/CurrentUserContext";

function SavedMovies(props) {
  const [areShortSavedMoviesSearched, setAreShortSavedMoviesSearched] =
    useState(false);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [savedKeywords, setSavedKeywords] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [notFound, setNotFound] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function filterSavedMovies(movies, words, shortSearched) {
    const foundSavedMovies = findMovies(movies, words, shortSearched);
    if (foundSavedMovies.length === 0) {
      setNotFound(true);
      setResultMessage("Ничего не найдено");
      setFilteredSavedMovies([]);
    } else {
      setNotFound(false);
    }
    setFilteredSavedMovies(foundSavedMovies);
    localStorage.setItem(
      `${localStorageNames.filteredSavedMovies}`,
      JSON.stringify(foundSavedMovies)
    );
  }

  function handleSearchSavedMovies(words) {
    setSavedKeywords(words);
    localStorage.setItem(`${localStorageNames.savedKeywords}`, words);
    localStorage.setItem(
      `${localStorageNames.areShortSavedMoviesSearched}`,
      areShortSavedMoviesSearched
    );
    filterSavedMovies(props.savedMovies, words, areShortSavedMoviesSearched);
  }

  function handleSearchShortSavedMovies(words) {
    setAreShortSavedMoviesSearched(!areShortSavedMoviesSearched);
    localStorage.setItem(
      `${localStorageNames.areShortSavedMoviesSearched}`,
      !areShortSavedMoviesSearched
    );
    setSavedKeywords(words);
    localStorage.setItem(`${localStorageNames.savedKeywords}`, words);
    filterSavedMovies(props.savedMovies, words, !areShortSavedMoviesSearched);
  }

  useEffect(() => {
    if (
      localStorage.getItem(
        `${localStorageNames.areShortSavedMoviesSearched}`
      ) === "true"
    ) {
      setAreShortSavedMoviesSearched(true);
    } else {
      setAreShortSavedMoviesSearched(false);
    }
  }, [currentUser]);

  useEffect(() => {
    const previousSavedKeywords = localStorage.getItem(
      `${localStorageNames.savedKeywords}`
    );
    if (previousSavedKeywords) {
      setSavedKeywords(previousSavedKeywords);
    } else {
      setSavedKeywords("");
    }
  }, [currentUser, filteredSavedMovies]);

  useEffect(() => {
    const previousMovies = JSON.parse(
      localStorage.getItem(`${localStorageNames.filteredSavedMovies}`)
    );
    if (previousMovies) {
      setFilteredSavedMovies(previousMovies);
    }
  }, [currentUser]);

  return (
    <div className="movies">
      <SearchForm
        handleSearchMovies={handleSearchSavedMovies}
        areShortMoviesSearched={areShortSavedMoviesSearched}
        handleSearchShortMovies={handleSearchShortSavedMovies}
        keywords={savedKeywords}
      />

      {notFound ? (
        <div className="movies__not-found-message">{resultMessage}</div>
      ) : (
        <>
          <MoviesCardList
            filteredMovies={filteredSavedMovies}
            savedMovies={props.savedMovies}
            onSaveMovieClick={props.onSaveMovieClick}
            onDeleteMovieClick={props.onDeleteMovieClick}
          ></MoviesCardList>
        </>
      )}
      <div className="movies__not-found">Все сохраненные фильмы:</div>
      <MoviesCardList
        filteredMovies={props.savedMovies}
        savedMovies={props.savedMovies}
        onSaveMovieClick={props.onSaveMovieClick}
        onDeleteMovieClick={props.onDeleteMovieClick}
      ></MoviesCardList>
    </div>
  );
}
export default SavedMovies;
