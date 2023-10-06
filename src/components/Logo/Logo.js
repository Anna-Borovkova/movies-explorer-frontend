import "./Logo.css";

import { Link } from "react-router-dom";

import logoImage from "../../images/logo.svg";

function Logo() {
  return (
    <Link to={"/"}>
      <img className="logo" src={logoImage} alt="логотип" />
    </Link>
  );
}

export default Logo;
