import "./NotFound.css";
import { useNavigate, Link } from "react-router-dom";

function NotFound(props) {
  return (
    <section className="not-found-error">
      <div className="not-found-error-about">
        <h1 className="not-found-error-title">404</h1>
        <p className="not-found-error-subtitle">Страница не найдена</p>
      </div>
      <Link to="/signin" className="not-found-error-link">
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
