import "./Menu.css";

function Menu(props) {
  return (
    <div className="menu" onClick={props.onClick}>
      <div className="menu__line"></div>
      <div className="menu__line"></div>
      <div className="menu__line"></div>
    </div>
  );
}

export default Menu;
