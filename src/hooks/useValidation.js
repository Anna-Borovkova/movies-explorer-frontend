import { useState, useCallback } from "react";
import { errorsMessages } from "../utils/config";

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const { value, name } = input;
    if (input.validity.patternMismatch) {
      input.setCustomValidity(errorsMessages[name]);
    } else {
      input.setCustomValidity("");
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    setValues,
    errors,
    handleChange,
    isValid,
    setIsValid,
    resetForm,
  };
}
