import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div
      className={
        props.menuOpened ? "navigation navigation_opened" : "navigation"
      }
    >
      {props.loggedIn ? (
        <div className="navigation__container">
          <div className="navigation__close-button">
            <div className="navigation__close-button-line"></div>
            <div className="navigation__close-button-line"></div>
          </div>
          <div className="navigation__main-part">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navigation__path navigation__path_main ${
                  isActive ? "navigation__path_active" : ""
                }`
              }
              type="button"
              aria-label="Главная."
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `navigation__path navigation__path_movies ${
                  isActive ? "navigation__path_active" : ""
                }`
              }
              type="button"
              aria-label="Фильмы"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={({ isActive }) =>
                `navigation__path navigation__path_saved-movies ${
                  isActive ? "navigation__path_active" : ""
                }`
              }
              type="button"
              aria-label="Сохраненные фильмы"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `navigation__path navigation__path_profile ${
                isActive ? "navigation__path_active" : ""
              } ${
                props.menuOpened
                  ? "profile-image__movies-page"
                  : props.profileIconClassName === "profile__main-page"
                  ? "profile-image__main-page"
                  : "profile-image__movies-page"
              }`
            }
            type="button"
            aria-label="Аккаунт"
          >
            Аккаунт
          </NavLink>
        </div>
      ) : (
        <>
          <Link
            to="/signup"
            className="navigation__path navigation__path_signup"
            type="button"
            aria-label="Регистрация."
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation__path navigation__path_signin"
            type="button"
            aria-label="Войти."
          >
            Войти
          </Link>
        </>
      )}
    </div>
  );
}

export default Navigation;
