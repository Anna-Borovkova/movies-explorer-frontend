import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { editMovieUrl, editMovieDuration } from "../../utils/utils";

function MoviesCard(props) {
  const buttonClassName = props.saved
    ? "movies-card__save-button movies-card__save-button_active"
    : "movies-card__save-button";

  function handleSaveMovie() {
    props.onSaveMovieClick(props.movie);
  }

  function handleDeleteMovie() {
    props.onDeleteMovieClick(props.movie);
  }

  const location = useLocation();
  return (
    <li className="movie-card">
      <a
        className="movie-card__link"
        href={props.movie.trailerLink}
        target="_blank"
      >
        {location.pathname === "/movies" ? (
          <img
            className="movie-card__img"
            src={editMovieUrl(props.movie)}
            alt={props.movie.nameRU}
          />
        ) : (
          <img
            className="movie-card__img"
            src={props.movie.image}
            alt={props.movie.nameRU}
          />
        )}
      </a>
      <h2 className="movie-card__title">{props.movie.nameRU}</h2>
      <p className="movie-card__duration">
        {editMovieDuration(props.movie.duration)}
      </p>
      {location.pathname === "/movies" ? (
        <button
          className={buttonClassName}
          onClick={props.saved ? handleDeleteMovie : handleSaveMovie}
        />
      ) : (
        <button
          className="movie-card__delete-button"
          onClick={handleDeleteMovie}
        />
      )}
    </li>
  );
}

export default MoviesCard;
