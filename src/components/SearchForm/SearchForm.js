import "./SearchForm.css";
import { useContext, useEffect, useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../../hooks/useValidation";
import { errorsMessages } from "../../utils/config";
import CurrentUserContext from "../../context/CurrentUserContext";

function SearchForm({
  handleSearchMovies,
  areShortMoviesSearched,
  handleSearchShortMovies,
  keywords,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation(
    {}
  );

  const [searchError, setSearchError] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    isValid
      ? handleSearchMovies(values.search)
      : setSearchError(errorsMessages.search);
  }

  useEffect(() => {
    setSearchError("");
  }, [isValid]);

  const searchFormButtonClassName = isValid
    ? "search__form-button"
    : "search__form-button search__form-button_disabled";

  useEffect(() => {
    if (keywords) {
      values.search = keywords;
      setIsValid(true);
    }
  }, [currentUser, keywords]);

  return (
    <section className="search">
      <div className="search__container">
        <form
          className="search__form"
          onSubmit={handleSubmit}
          noValidate={true}
        >
          <div className="search__form-icon"></div>
          <input
            className="search__form-input"
            required
            type="text"
            name="search"
            placeholder="Фильм"
            id="search"
            value={values.search || ""}
            onChange={handleChange}
          ></input>
          <button
            className={searchFormButtonClassName}
            type="submit"
            disabled={!isValid}
          >
            Найти
          </button>
        </form>
        <FilterCheckbox
          areShortMoviesSearched={areShortMoviesSearched}
          handleSearchShortMovies={handleSearchShortMovies}
        />
      </div>
      <span className="search__error-message">{searchError}</span>
    </section>
  );
}

export default SearchForm;
