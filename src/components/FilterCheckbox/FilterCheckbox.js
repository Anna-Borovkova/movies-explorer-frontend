import "./FilterCheckbox.css";

function FilterCheckbox({ areShortMoviesSearched, onChange, disabled }) {

  const checkboxSwitcherClassName = !disabled
    ? "checkbox__switcher"
    : "checkbox__switcher checkbox__switcher_disabled";

  return (
    <div className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        onChange={onChange}
        checked={areShortMoviesSearched ? true : false}
        disabled = {disabled}
      />
      <div className={checkboxSwitcherClassName}></div>
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
