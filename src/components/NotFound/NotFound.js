import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    // console.log("нажали");
    navigate(-1);
  }

  return (
    <section className="not-found-error">
      <div className="not-found-error-about">
        <h1 className="not-found-error-title">404</h1>
        <p className="not-found-error-subtitle">Страница не найдена</p>
      </div>
      <button className="not-found-error-link" onClick={goBack}>
        Назад
      </button>
    </section>
  );
}

export default NotFound;
