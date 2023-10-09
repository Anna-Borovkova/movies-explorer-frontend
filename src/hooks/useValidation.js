import { useState, useCallback, useEffect } from "react";

//хук управления формой и валидации формы
export function useFormWithValidation(
  initialValue = {},
  initialError,
  initialIsValid
) {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(initialError);
  const [isValid, setIsValid] = useState(initialIsValid);

  // useEffect(() => {
  //   setIsFormValid(Object.values(inputsValidity).every(validity => validity === true));
  // }, [inputsValidity])

  const handleChange = (event) => {
    // const target = event.target;
    // const name = target.name;
    // const value = target.value;
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  // const resetForm = useCallback(
  //   (newValues = {}, newErrors = {}, newIsValid = false) => {
  //     setValues(newValues);
  //     setErrors(newErrors);
  //     setIsValid(newIsValid);
  //   },
  //   [setValues, setErrors, setIsValid]
  // );

  // return { values, handleChange, errors, isValid, resetForm };
  return { values, handleChange, setValues };
}
