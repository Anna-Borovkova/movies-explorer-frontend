import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__form-icon"></div>
          <input
            className="search__form-input"
            required="true"
            type="text"
            name="keyword"
            placeholder="Фильм"
          ></input>
          <button className="search__form-button" type="submit">
            Найти
          </button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
