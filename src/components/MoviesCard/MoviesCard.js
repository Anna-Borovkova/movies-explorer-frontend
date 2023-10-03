import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <li className="movie-card">
      <img className="movie-card__img" src={props.img} alt={props.title} />
      <h2 className="movie-card__title">{props.title}</h2>
      <p className="movie-card__duration">{props.duration}</p>
      {props.children}
    </li>
  );
}

export default MoviesCard;
