import "./Form.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Form({
  name,
  title,
  buttonText,
  children,
  errorMassage,
  questionText,
  linkPath,
  linkText,
}) {
  return (
    <div className="form">
      <Logo />
      <h3 className="form__title">{title}</h3>
      <form name={`${name}-form`} className="form__container">
        <div className="form__input">
          {children}
          <span className="form__error-massage">{errorMassage}</span>
        </div>
        <button type="submit" className="form__button" aria-labelledby>
          {buttonText}
        </button>
      </form>
      <div className="form__question">
        <span className="form__question-text">{questionText}</span>
        <Link to={linkPath} className="form__question-link">
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default Form;
