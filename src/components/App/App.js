import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
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
import CurrentUserContext from "../../context/CurrentUserContext";
import { mainApi } from "../../utils/Api/MainApi";
import { editMovieUrl, editMovieThumbnail } from "../../utils/utils";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [editProfileMessage, setEditProfileMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const isHeaderInclude =
    path === "/" ||
    path === "/movies" ||
    path === "/saved-movies" ||
    path === "/profile";

  const isFooterInclude =
    path === "/" || path === "/movies" || path === "/saved-movies";

  const checkToken = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (!res) {
          return;
        }
        setLoggedIn(true);
        setCurrentUser(res);
        navigate(path);
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUser(null);
        console.log(err);
      });
  };

  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  function handleSignIn(name, email, password, setSignUpError) {
    mainApi
      .signUp(name, email, password)
      .then(() => {
        return mainApi.signIn(email, password);
      })
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        navigate("/movies");
      })
      .catch((err) => {
        err.then((e) => setSignUpError(e.message));
      });
  }

  function handleLogin(email, password, setSignInError) {
    mainApi
      .signIn(email, password)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        navigate("/movies");
      })
      .catch((err) => {
        err.then((e) => setSignInError(e.message));
      });
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then((res) => {
        setCurrentUser(null);
        setLoggedIn(false);
        localStorage.clear();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditProfile(name, email) {
    mainApi
      .changeUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setEditProfileMessage(`Данные успешно обновлены`);
      })
      .catch((err) => {
        err.then((e) => setEditProfileMessage(e.message));
      });
  }

  function onSaveMovieClick(movie) {
    const editedMovieUrl = editMovieUrl(movie);
    const editedMovieThumbnail = editMovieThumbnail(movie);
    mainApi
      .addMovie(
        movie.country,
        movie.director,
        movie.duration,
        movie.year,
        movie.description,
        editedMovieUrl,
        movie.trailerLink,
        editedMovieThumbnail,
        movie.id,
        movie.nameRU,
        movie.nameEN
      )
      .then((movie) => setSavedMovies([movie, ...savedMovies]))
      .catch((err) => {
        console.log(err);
      });
  }

  function onDeleteMovieClick(movie) {
    const savedMovie = savedMovies.find(
      (m) => m.movieId === movie.movieId || m.movieId === movie.id
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter((m) => {
          if (movie.movieId === m.movieId || movie.id === m.movieId) {
            console.log(false);
            return false;
          } else {
            console.log(true);
            return true;
          }
        });
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (isLoggedIn && currentUser) {
      mainApi
        .getUserMovies()
        .then((movies) => {
          const userSavedMovies = movies.filter(
            (m) => m.owner === currentUser._id
          );
          setSavedMovies(userSavedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, currentUser]);

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          {isHeaderInclude ? (
            <header>
              <Header isLoggedIn={isLoggedIn} />
            </header>
          ) : null}
          <main className="content">
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={Movies}
                    savedMovies={savedMovies}
                    onSaveMovieClick={onSaveMovieClick}
                    onDeleteMovieClick={onDeleteMovieClick}
                  />
                }
              ></Route>
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    element={SavedMovies}
                    savedMovies={savedMovies}
                    onDeleteMovieClick={onDeleteMovieClick}
                  />
                }
              ></Route>
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    handleSignOut={handleSignOut}
                    element={Profile}
                    handleEditProfile={handleEditProfile}
                    editProfileMessage={editProfileMessage}
                  />
                }
              ></Route>
              <Route
                path="/signup"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" />
                  ) : (
                    <Register handleSignIn={handleSignIn} />
                  )
                }
              />
              <Route
                path="/signin"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" />
                  ) : (
                    <Login handleLogin={handleLogin} />
                  )
                }
              />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </main>
          {isFooterInclude ? <Footer /> : null}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
