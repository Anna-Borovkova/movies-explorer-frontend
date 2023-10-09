import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div
      className={
        props.isLoggedIn
          ? props.menuOpened
            ? "navigation navigation_opened"
            : "navigation navigation_closed"
          : "navigation navigation__unregistrated"
      }
    >
      {props.isLoggedIn ? (
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
                  ? "profile-image profile-image_movies-page"
                  : props.profileIconClassName === "profile__main-page"
                  ? "profile-image profile-image_main-page"
                  : "profile-image profile-image_movies-page"
              }`
            }
            aria-label="Аккаунт"
          >
            Аккаунт
          </NavLink>
        </div>
      ) : (
        <>
          <Link
            to="/signup"
            className="navigation__unregistrated navigation__unregistrated_signup"
            type="button"
            aria-label="Регистрация."
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className="navigation__unregistrated navigation__unregistrated_signin"
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
