import "./Login.css";
import { useState } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";
import { useFormWithValidation } from "../../hooks/useValidation";

function Login({ handleLogin }) {
  const [signInError, setSignInError] = useState("");

  const { values, errors, handleChange, isValid, setIsValid, resetForm } =
    useFormWithValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin(values.email, values.password, setSignInError);
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
