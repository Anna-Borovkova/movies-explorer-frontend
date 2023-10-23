import "./Header.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

function Header(props) {
  const location = useLocation();

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleMenuClick() {
    setIsMenuOpened(!isMenuOpened);
  }

  const headerClassName =
    location.pathname === "/"
      ? "header header_main-page"
      : "header header_movies-page";

  return (
    <div className={headerClassName}>
      <Logo />
      <Navigation
        isLoggedIn={props.isLoggedIn}
        profileIconClassName={props.profileIconClassName}
        isMenuOpened={isMenuOpened}
        onClick={handleMenuClick}
      />
      {props.isLoggedIn && <Menu onClick={handleMenuClick} />}
    </div>
  );
}

export default Header;
