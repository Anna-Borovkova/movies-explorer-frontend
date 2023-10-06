import "./Login.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";

function Login(props) {
  return (
    <FormPage>
      <Form
        name="login"
        title="Рады видеть!"
        buttonText="Войти"
        questionText="Ещё не зарегистрированы?"
        errorMassage="Что-то пошло не так..."
        linkPath="/signup"
        linkText="Регистрация"
      >
        <Input
          title="E-mail"
          type="email"
          name="signin-email"
          id="signin-email-input"
        />
        <Input
          title="Пароль"
          type="password"
          name="signin-password"
          id="signin-password-input"
        />
      </Form>
    </FormPage>
  );
}

export default Login;
