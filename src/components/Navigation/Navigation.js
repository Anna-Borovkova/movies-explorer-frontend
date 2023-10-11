import "./Navigation.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function Navigation(props) {
  const location = useLocation();

  const profileIconClassName =
    location.pathname === "/" ? "profile__main-page" : "profile__movies-page";

  return (
    <div
      className={
        props.isLoggedIn
          ? props.isMenuOpened
            ? "navigation navigation_opened"
            : "navigation navigation_closed"
          : "navigation navigation__unregistrated"
      }
    >
      {props.isLoggedIn ? (
        <div className="navigation__container">
          <div className="navigation__close-button" onClick={props.onClick}>
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
                props.isMenuOpened
                  ? "profile-image profile-image_movies-page"
                  : profileIconClassName === "profile__main-page"
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
