import "./FilterCheckbox.css";

function FilterCheckbox({ areShortMoviesSearched, handleSearchShortMovies }) {
  const switcherClassName = areShortMoviesSearched
    ? "checkbox__switcher checkbox__switcher_active"
    : "checkbox__switcher";
  const indicatorClassName = areShortMoviesSearched
    ? "checkbox__indicator checkbox__indicator_active"
    : "checkbox__indicator";

 return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={handleSearchShortMovies}
        checked={areShortMoviesSearched ? true : false}
      />
      <div className="checkbox__switcher"></div>
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
