import {
  errors,
  regExpEmail,
  regExpName,
  regExpPassword,
} from "../../utils/config";

function validateName(data) {
  return regExpName.test(data);
}

export const nameValidator = {
  result: validateName,
  error: errors.nameError,
};

function validateEmail(data) {
  return regExpEmail.test(data);
}

export const emailValidator = {
  result: validateEmail,
  error: errors.emailError,
};

function validatePassword(data) {
  return regExpPassword.test(data);
}

export const passwordValidator = {
  result: validatePassword,
  error: errors.passwordError,
};
