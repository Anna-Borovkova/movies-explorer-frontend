import { useEffect, useState } from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const location = useLocation();

  const [isLoggedIn, setLoggedIn] = useState(false);

  // поменять экран для авторизованного или неавторизованного пользователя
  //   setLoggedIn(true);
  // }

  // для среднего и узкого экрана посмотреть вид открытого меню
  const menuOpened = true;

  const isHeaderInclude =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  const headerClassName =
    location.pathname === "/"
      ? "header header_main-page"
      : "header header_movies-page";

  const profileIconClassName =
    location.pathname === "/" ? "profile__main-page" : "profile__movies-page";

  const isFooterInclude =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  return (
    <div className="body">
      <div className="page">
        {isHeaderInclude ? (
          <header>
            <Header
              headerClassName={headerClassName}
              isLoggedIn={isLoggedIn}
              profileIconClassName={profileIconClassName}
              menuOpened={menuOpened}
            />
          </header>
        ) : null}
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route
              path="/movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} element={Movies} />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} element={SavedMovies} />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} element={Profile} />
              }
            ></Route>
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register handleLogin={() => setLoggedIn(true)} />
                )
              }
            />
            <Route
              path="/signin"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Login handleLogin={() => setLoggedIn(true)} />
                )
              }
            />

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        {isFooterInclude ? <Footer /> : null}
      </div>
    </div>
  );
}

export default App;
