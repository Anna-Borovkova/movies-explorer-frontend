import { useLocation, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App() {
  const location = useLocation();

  // поменять экран для авторизованного или неавторизованного пользователя
  const loggedIn = true;

  // для среднего и узкого экрана посмотреть вид открытого меню
  const menuOpened = false;

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
              loggedIn={loggedIn}
              profileIconClassName={profileIconClassName}
              menuOpened={menuOpened}
            />
          </header>
        ) : null}
        <main className="content">
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/saved-movies" element={<SavedMovies />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Register />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
        {isFooterInclude ? <Footer /> : null}
      </div>
    </div>
  );
}

export default App;
