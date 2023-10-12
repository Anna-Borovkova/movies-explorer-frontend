import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
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
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUserAuth, setCurrentUserAuth] = useState(null);

  // поменять экран для авторизованного или неавторизованного пользователя
  //   setLoggedIn(true);
  // }

  const isHeaderInclude =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies" ||
    location.pathname === "/profile";

  const isFooterInclude =
    location.pathname === "/" ||
    location.pathname === "/movies" ||
    location.pathname === "/saved-movies";

  const checkToken = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (!res) {
          return;
        }
        setCurrentUserAuth(res);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUserAuth(null);
        console.log(err);
      });
  };

  useEffect(() => {
    checkToken();
  }, [isLoggedIn]);

  function handleSignOut() {
    mainApi
      .signOut()
      .then((res) => {
        setCurrentUserAuth(null);
        setLoggedIn(false);
        navigate("/signin");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="body">
      <div className="page">
        {/* <CurrentUserContext.Provider value={currentUser}> */}
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
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  handleSignOut={handleSignOut}
                  element={Profile}
                />
              }
            ></Route>
            <Route
              path="/signup"
              element={
                isLoggedIn ? (
                  <Navigate to="/" />
                ) : (
                  <Register handleSingIn={() => setLoggedIn(true)} />
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
        {/* </CurrentUserContext.Provider> */}
      </div>
    </div>
  );
}

export default App;
