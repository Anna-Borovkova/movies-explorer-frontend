import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";

function Header(props) {
  return (
    <div className={props.headerClassName}>
      <Logo />
      <Navigation
        isLoggedIn={props.isLoggedIn}
        profileIconClassName={props.profileIconClassName}
        menuOpened={props.menuOpened}
      />
      {props.isLoggedIn && <Menu />}
    </div>
  );
}

export default Header;
