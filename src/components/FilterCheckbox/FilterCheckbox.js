import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  //посмотреть, как будет выглядеть неактивный чекбокс
  const isActive = false;

  const switcherClassName = isActive
    ? "checkbox__switcher checkbox__switcher_active"
    : "checkbox__switcher";
  const indicatorClassName = isActive
    ? "checkbox__indicator checkbox__indicator_active"
    : "checkbox__indicator";

  return (
    <div className="checkbox">
      <div className={switcherClassName}>
        <div className={indicatorClassName}></div>
      </div>
      <input className="checkbox__input" type="checkbox" />
      <span className="checkbox__title">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
