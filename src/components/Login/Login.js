import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";
import { useFormWithValidation } from "../../hooks/useValidation";
import { mainApi } from "../../utils/Api/MainApi";
import { errors } from "../../utils/config";

function Login({ handleLogin }) {
  const [isFormValid, setFormValid] = useState(true);

  const navigate = useNavigate();
  const [signInError, setSignInError] = useState("");

  const { values, error, handleChange } = useFormWithValidation({});

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
        errorMassage="Что-то пошло не так..."
        linkPath="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
      >
        <Input
          title="E-mail"
          type="email"
          name="email"
          id="signin-email-input"
          value={values.email || ""}
          onChange={handleChange}
          validationMessage="Введены некорректные данные"
        />
        <Input
          title="Пароль"
          type="password"
          name="password"
          id="signin-password-input"
          value={values.password || ""}
          onChange={handleChange}
          validationMessage="Введены некорректные данные"
        />
      </Form>
    </FormPage>
  );
}

export default Login;
