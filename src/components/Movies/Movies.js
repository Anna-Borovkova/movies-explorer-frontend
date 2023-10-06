import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import AddMovies from "../AddMovies/AddMovies";
import MovieImageFirst from "../../images/movie-image-1.png";

function Movies(props) {
  // посмотреть как будет выглядеть поставленный лайк
  const isSaved = true;

  // посмотреть, как будет выглядеть страница без результатов
  const notFound = false;

  const buttonClassName = isSaved
    ? "movies-card__save-button movies-card__save-button_active"
    : "movies-card__save-button";

  return (
    <div className="movies">
      <SearchForm />
      {notFound ? (
        <div className="movies__not-found">
          Фильмов по данным критериям не найдено
        </div>
      ) : (
        <MoviesCardList
          title="Киноальманах «100 лет дизайна»"
          duration="1ч 42м"
          img={MovieImageFirst}
        >
          <button className={buttonClassName} />
        </MoviesCardList>
      )}

      <AddMovies />
    </div>
  );
}

export default Movies;
