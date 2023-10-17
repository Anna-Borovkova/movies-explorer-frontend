import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MovieImageFirst from "../../images/movie-image-1.png";
import MovieImageSecond from "../../images/movie-image-2.png";

function SavedMovies(props) {
  // посмотреть, как будет выглядеть страница без результатов
  const notSaved = true;

  return (
    <div className="movies">
      <SearchForm />
      {notSaved ? (
        <div className="movies__not-found">
          Фильмов по данным критериям не найдено
        </div>
      ) : (
        <MoviesCardList
          title="Киноальманах «100 лет дизайна»"
          duration="1ч 42м"
          img={MovieImageSecond}
          trailerLink={""}
        >
          <button className="delete-button" />
        </MoviesCardList>
      )}
    </div>
  );
}
export default SavedMovies;
