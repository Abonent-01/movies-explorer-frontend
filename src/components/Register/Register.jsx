import React, {useEffect, useState} from 'react'
import './Register.css'
import {useLocation} from "react-router-dom";
import * as auth from '../../utils/auth'
import FormElement from "../FormElement/FormElement";
import Input from "../Input/Input";
import useFormWithValidation from "../../hooks/useFormValidation";
import {
  EMAIL_SPAN_ERROR,
  handleMessageErrors,
  NAME_SPAN_ERROR,
  PASSWORD_SPAN_ERROR,
} from "../../utils/constants";

const Register = ({ handleOnLogin, setCurrentUser }) => {
  const location = useLocation()
  const pathname = location.pathname
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)
  const { values, resetForm, handleOnChange, errors, isValid } = useFormWithValidation()
  const [isEntering, setIsEntering] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [textOnError, setTextOnError] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const greetingMessage = 'Добро пожаловать!'
  const textButton = 'Зарегистрироваться'
  const textOnSigningUp = 'Регистрация...'
  const textParagraph = 'Уже зарегистрированы?'
  const link = '/signin'
  const textSpan = 'Войти'

  useEffect(() => {
    setIsSubmitDisabled(!isValid)
  }, [values]);


  const submitHandler = async (e) => {
    e.preventDefault()
    setIsSubmitDisabled(true)
    const {name, email, password} = values

    if (!name || !email || !password) {
      setIsSuccess(false)
      window.alert('Пожалуйста, заполните все поля.')
      return
    } else {
      setIsEntering(true)
      setIsDisabled(true)

      try {
        const data = await auth.register(name, email, password)
        setIsSuccess(true)
        setIsOpen(true)
        handleOnLogin()
        resetForm()
        setCurrentUser({name: data.name, email: data.email})
      } catch (err) {
        setTextOnError(() => handleMessageErrors(err.message, pathname))
        console.error(`Error: ${err.message}`)
        setIsOpen(true)
        setIsSuccess(false)
      } finally {
        setIsOpen(true)
        setIsSubmitDisabled(true)
        setIsEntering(false)
        setIsDisabled(false)
      }
    }
  }

  return (
    <FormElement
      greetingMessage={greetingMessage}
      textBtn={textButton}
      paragraph={textParagraph}
      link={link}
      span={textSpan}
      submitHandler={submitHandler}
      isSubmitDisabled={isSubmitDisabled}
      isEntering={isEntering}
      textOnSigningUp={textOnSigningUp}
    >
      <Input
        value={values.name || ''}
        errors={errors?.name}
        onChange={handleOnChange}
        name='name'
        type='text'
        label='Имя'
        placeholder='Введите свое Имя.'
        minLength={2}
        maxLength={30}
        pattern='^[A-Za-zА-Яа-я \-]+$'
        errorMessage={NAME_SPAN_ERROR}
        isDisabled={isDisabled}
      />
      <Input
        value={values.email || ''}
        errors={errors?.email}
        onChange={handleOnChange}
        name='email'
        type='email'
        label='E-mail'
        placeholder='Введите свой E-mail.'
        minLength={2}
        maxLength={30}
        pattern='^[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$'
        errorMessage={EMAIL_SPAN_ERROR}
        isDisabled={isDisabled}
      />
      <Input
        value={values.password || ''}
        errors={errors?.password}
        onChange={handleOnChange}
        name='password'
        type='password'
        label='Пароль'
        placeholder='Введите свой Пароль.'
        minLength={6}
        maxLength={36}
        pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{6,}$'
        errorMessage={PASSWORD_SPAN_ERROR}
        isDisabled={isDisabled}
      />
    </FormElement>
  )
}
export default Register
