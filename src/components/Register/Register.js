import "./Register.css";
import Form from "../Form/Form";
import Input from "../Input/Input";
import FormPage from "../FormPage/FormPage";

function Register(props) {
  return (
    <FormPage>
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        errorMassage="Что-то пошло не так..."
        questionText="Уже зарегистрированы?"
        linkPath="/signin"
        linkText="Войти"
      >
        <Input title="Имя" type="name" name="name" id="name-input" />
        <Input
          title="E-mail"
          type="email"
          name="signup-email"
          id="signup-email-input"
        />
        <Input
          title="Пароль"
          type="password"
          name="signup-password"
          id="signup-password-input"
        />
      </Form>
    </FormPage>
  );
}

export default Register;
