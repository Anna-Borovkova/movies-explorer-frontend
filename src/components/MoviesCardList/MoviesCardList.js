import "./MoviesCardList.css";
import AddMovies from "../AddMovies/AddMovies";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import { checkSavedMovie } from "../../utils/utils";
import { useCheckPageWidth } from "../../hooks/useCheckPageWidth";

function MoviesCardList({
  filteredMovies,
  savedMovies,
  onSaveMovieClick,
  onDeleteMovieClick,
}) {
  const location = useLocation();
  const [moviesToRender, setMoviesToRender] = useState([]);
  const { moviesToRenderNumber, moreMoviesToRenderNumber } =
    useCheckPageWidth();

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (filteredMovies.length) {
        const moviesToRenderCurrent = filteredMovies.filter(
          (item, index) => index < moviesToRenderNumber
        );
        setMoviesToRender(moviesToRenderCurrent);
      }
    } else {
      setMoviesToRender(filteredMovies);
    }
  }, [filteredMovies, moviesToRenderNumber]);

  function handleAddMoviesClick() {
    const lastRenderedMovieIndex = moviesToRender.length;
    const lastMovieToRenderIndex =
      lastRenderedMovieIndex + moreMoviesToRenderNumber;
    const notRenderedMoviesNumber =
      filteredMovies.length - lastRenderedMovieIndex;

    if (notRenderedMoviesNumber > 0) {
      const moreMoviesToRender = filteredMovies.slice(
        lastRenderedMovieIndex,
        lastMovieToRenderIndex
      );
      setMoviesToRender([...moviesToRender, ...moreMoviesToRender]);
    }
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        {moviesToRender.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            onSaveMovieClick={onSaveMovieClick}
            onDeleteMovieClick={onDeleteMovieClick}
            saved={checkSavedMovie(savedMovies, movie)}
          ></MoviesCard>
        ))}
      </ul>
      {location.pathname === "/movies" &&
        moviesToRender.length < filteredMovies.length && (
          <AddMovies onClick={handleAddMoviesClick} />
        )}
    </section>
  );
}

export default MoviesCardList;
