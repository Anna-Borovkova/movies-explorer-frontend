export const errors = {
  emailError: "Поле не соответствует шаблону электронной почты",
  nameError: "От 2 до 30 символов. Только литиница, кириллица, пробел и дефис",
  passwordError: "От 2 до 30 символов",
};

export const regExpEmail = /\w+@\w+\.\w+/;
export const regExpName = /^[A-zА-яё\s\-]{2,30}$/;
export const regExpPassword = /^.{2,30}$/;
