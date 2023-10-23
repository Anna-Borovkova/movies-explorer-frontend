import "./AddMovies.css";

function AddMovies({ onClick }) {
  return (
    <section className="add-movies">
      <button className="add-movies__button" type="button" onClick={onClick}>
        Ещё
      </button>
    </section>
  );
}

export default AddMovies;
