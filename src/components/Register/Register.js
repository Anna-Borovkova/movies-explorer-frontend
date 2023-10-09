import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";
import { useFormWithValidation } from "../../hooks/useValidation";
import { mainApi } from "../../utils/Api/MainApi";
import { errors } from "../../utils/config";

function Register({ handleLogin }) {
  const [isFormValid, setFormValid] = useState(false);

  const navigate = useNavigate();
  const [signUpError, setSignUpError] = useState("");

  // const { values, error, handleChange } = useFormWithValidation(
  //   { name: "", email: "", password: "" },
  //   { name: "", email: "", password: "" },
  //   { name: false, email: false, password: false }
  // );

  const { values, error, handleChange } = useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    mainApi
      .signUp(values.name, values.email, values.password)
      .then((res) => {
        return mainApi.signIn(values.email, values.password);
      })
      .then(() => {
        handleLogin();
        navigate("/movies");
      })
      .catch((err) => {
        err.then((e) => setSignUpError(e.message));
      });
  }

  return (
    <FormPage>
      <Form
        name="signup"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        errorMessage={signUpError}
        questionText="Уже зарегистрированы?"
        linkPath="/signin"
        linkText="Войти"
        onSubmit={handleSubmit}
        isFormValid={isFormValid}
      >
        <Input
          title="Имя"
          type="name"
          name="name"
          id="name-input"
          value={values.name || ""}
          onChange={handleChange}
          validationMessage="Введены некорректные данные"
        />
        <Input
          title="E-mail"
          type="email"
          name="email"
          id="signup-email-input"
          value={values.email || ""}
          onChange={handleChange}
          validationMessage="Введены некорректные данные"
        />
        <Input
          title="Пароль"
          type="password"
          name="password"
          id="signup-password-input"
          value={values.password || ""}
          onChange={handleChange}
          validationMessage="Введены некорректные данные"
        />
      </Form>
    </FormPage>
  );
}

export default Register;
