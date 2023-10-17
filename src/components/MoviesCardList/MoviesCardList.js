import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
        <MoviesCard
          title={props.title}
          duration={props.duration}
          img={props.img}
          trailerLink={props.trailerLink}
        >
          {props.children}
        </MoviesCard>
      </ul>
    </section>
  );
}

export default MoviesCardList;
