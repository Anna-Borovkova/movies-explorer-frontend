import "./FilterCheckbox.css";

function FilterCheckbox({ areShortMoviesSearched, handleSearchShortMovies }) {
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
