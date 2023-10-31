import {useCallback, useState} from "react";


const useFormWithValidation = () => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)


  const handleOnChange = (event) => {
    const target = event.target

    const { name, value } = target

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest('form').checkValidity())
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    }, [setValues, setErrors, setIsValid]
  )

  return { values, errors, setErrors, isValid, handleOnChange, setValues, setIsValid, resetForm}
}

export default useFormWithValidation;
