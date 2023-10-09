import "./Form.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function Form({
  name,
  title,
  buttonText,
  children,
  errorMessage,
  questionText,
  linkPath,
  linkText,
  onSubmit,
  isFormValid,
}) {
  const buttonClassName = isFormValid
    ? "form__button"
    : "form__button form__button_disabled";

  return (
    <div className="form">
      <Logo />
      <h3 className="form__title">{title}</h3>
      <form
        noValidate={true}
        name={`${name}-form`}
        className="form__container"
        onSubmit={onSubmit}
      >
        <div className="form__input">{children}</div>
        <div className="form__basement">
          <span className="form__error-message">{errorMessage}</span>
          <button
            type="submit"
            className={buttonClassName}
            aria-labelledby
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </div>
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
