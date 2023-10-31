import React from 'react'
import './FormButton.css'
import {useLocation} from "react-router-dom";
const FormButton = ({
  text,
  onClick,
  margin,
  smallScreenMargin,
  type,
  isSubmitDisabled,
  textOnSigningUp,
  textOnSigninIn,
  isEntering
}) => {
  const location = useLocation()
  const pathname = location.pathname

  const buttonStyle = {
    marginTop: margin
  }

  if (window.innerWidth <= 320 && smallScreenMargin)  {
    buttonStyle.marginTop = smallScreenMargin
  } else {
    buttonStyle.marginTop = margin
  }

  return (
    <button
      disabled={isSubmitDisabled}
      type={type}
      className='form-btn'
      onClick={onClick}
      style={buttonStyle}
    >
      {
        isEntering && pathname === '/signup' ? textOnSigningUp :
        isEntering && pathname === '/signin' ? textOnSigninIn :
        text
      }
    </button>
  )
}
export default FormButton
