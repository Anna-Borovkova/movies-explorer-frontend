import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";
import { useFormWithValidation } from "../../hooks/useValidation";
import { mainApi } from "../../utils/Api/MainApi";

function Login({ handleLogin }) {
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState("");

  const { values, errors, handleChange, isValid, setIsValid, resetForm } =
    useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    mainApi
      .signIn(values.email, values.password)
      .then(() => {
        handleLogin();
        navigate("/movies");
      })
      .catch((err) => {
        err.then((e) => setSignInError(e.message));
      });
  }

  return (
    <FormPage>
      <Form
        name="signin"
        title="Рады видеть!"
        buttonText="Войти"
        errorMessage={signInError}
        questionText="Ещё не зарегистрированы?"
        linkPath="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        isFormValid={isValid}
      >
        <Input
          title="E-mail"
          type="email"
          name="email"
          id="signin-email-input"
          value={values.email || ""}
          onChange={handleChange}
          pattern="\w+@\w+\.\w+"
          error={errors.email}
        />
        <Input
          title="Пароль"
          type="password"
          name="password"
          id="signin-password-input"
          value={values.password || ""}
          onChange={handleChange}
          pattern="^.{2,30}$"
          error={errors.password}
        />
      </Form>
    </FormPage>
  );
}

export default Login;
