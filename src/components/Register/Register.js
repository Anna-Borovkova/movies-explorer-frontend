import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";
import { useFormWithValidation } from "../../hooks/useValidation";
import { mainApi } from "../../utils/Api/MainApi";

function Register({ handleSingIn }) {
  const navigate = useNavigate();

  const [signUpError, setSignUpError] = useState("");
  const { values, errors, handleChange, isValid, setIsValid, resetForm } =
    useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    mainApi
      .signUp(values.name, values.email, values.password)
      .then((res) => {
        return mainApi.signIn(values.email, values.password);
      })
      .then(() => {
        handleSingIn();
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
        isFormValid={isValid}
      >
        <Input
          title="Имя"
          type="name"
          name="name"
          id="name-input"
          value={values.name || ""}
          onChange={handleChange}
          pattern="^[A-zА-яё\s\-]{2,30}$"
          error={errors.name}
        />
        <Input
          title="E-mail"
          type="email"
          name="email"
          id="signup-email-input"
          value={values.email || ""}
          onChange={handleChange}
          pattern="\w+@\w+\.\w+"
          error={errors.email}
        />
        <Input
          title="Пароль"
          type="password"
          name="password"
          id="signup-password-input"
          value={values.password || ""}
          onChange={handleChange}
          pattern="^.{2,30}$"
          error={errors.password}
        />
      </Form>
    </FormPage>
  );
}

export default Register;
