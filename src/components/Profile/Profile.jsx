import React, {useContext, useEffect, useState} from 'react'
import './Profile.css'
import {NavLink, useLocation} from "react-router-dom";
import FormButton from "../FormButton/FormButton";
import useFormValidation from "../../hooks/useFormValidation";
import {
  handleMessageErrors,
  EMAIL_SPAN_ERROR,
  NAME_SPAN_ERROR
} from "../../utils/constants";
import {updateUserProfile} from "../../utils/MainApi";


import {CurrentUserContext} from "../../contexts/CurrentUserContext";

const Profile = ({ handleOnLogout, setCurrentUser }) => {
  const { values, handleOnChange, setValues, errors, resetForm } = useFormValidation()
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)
  const location = useLocation()
  const pathname = location.pathname
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [editProfile, setEditProfile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [textOnError, setTextOnError] = useState('')
  const [isEntering, setIsEntering] = useState(false)

  const currentUser = useContext(CurrentUserContext)
  const { name, email } = currentUser

  useEffect(() => {
    setValues({ ...values,
      'name': name,
      'email': email
    })

  }, [currentUser]);

  useEffect(() => {
    if (
      (name !== values.name || email !== values.email) &&
      (values.name !== '' && values.email !== '') &&
      !errors.name && !errors.email
    ) {
      setBtnDisabled(false)
      setIsSubmitDisabled(false)
    }
    else {
      setIsSubmitDisabled(true)
      setBtnDisabled(true)
    }
  }, [values]);

  const handleEditProfile = () => {
    setEditProfile(true)
  }

  const handleSavingChanges = async () => {
    setIsEntering(true)

    try {
      const data = await updateUserProfile(values.name, values.email)
      setEditProfile(false)
      setIsSuccess(true)
      setIsOpen(true)
      setCurrentUser({name: data.name, email: data.email})

    } catch (err) {
      setTextOnError(() => handleMessageErrors(err.message, pathname))
      setIsOpen(true)
      setIsSuccess(false)
      setIsSubmitDisabled(true)
      console.error(`Error: ${err.message}`)
    }
    finally {
      setBtnDisabled(true)
      setIsEntering(false)
    }
  }

  return (
    <div className='profile'>
      <h2 className="profile__heading">Привет, {name}!</h2>

      <form className="profile__form form" onSubmit={handleSavingChanges} noValidate>
        <label className='form_label'>Имя
          <input
            className='form_input'
            type="text"
            name='name'
            value={values.name || ""}
            onChange={handleOnChange}
            minLength={2}
            maxLength={30}
            pattern='^[A-Za-zА-Яа-я \-]+$'
            required
            placeholder='Введите свое имя.'
            disabled={isEntering}
          />
        </label>
        <span className="span_error">{errors.name && NAME_SPAN_ERROR}</span>
        <label className='form_label'>E-mail
          <input
            className='form_input'
            type="email"
            name='email'
            value={values.email || ""}
            onChange={handleOnChange}
            minLength={2}
            maxLength={30}
            pattern='^[a-zA-Z0-9_.\-]+@[a-zA-Z0-9_]+\.[a-z]{2,6}$'
            required
            placeholder='Введите свой E-mail.'
            disabled={isEntering}
          />
        </label>
        <span className="span_error">{errors.email && EMAIL_SPAN_ERROR}</span>

        {editProfile ? (
          <FormButton
            type='button'
            animation='scale-in-ver-top'
            text={isEntering ? 'Сохраняю...' : 'Сохранить'}
            onClick={handleSavingChanges}
            margin='12.25rem'
            smallScreenMargin={'22rem'}
            isSubmitDisabled={isSubmitDisabled}
          />
        ) : (
          <>
            <button
              type='button'
              className="profile__btn profile__btn_type_edit"
              onClick={handleEditProfile}
              disabled={btnDisabled}
            >Редактировать</button>
            <button
              type='button'
              className="profile__btn profile__btn_type_exit"
              onClick={handleOnLogout}
            >
              <NavLink to='/'>Выйти из аккаунта</NavLink>
            </button>
          </>

        )}
      
      </form>
    </div>
  )
}
export default Profile
