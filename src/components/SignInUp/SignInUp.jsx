import React from 'react'
import { NavLink } from "react-router-dom";
import './SignInUp.css'
const SignInUp = () => {
  return (
    <div className="signinup__container place-center">
      <div className="signinup__container_links">
        <p>
          <NavLink to='/signup'>Регистрация</NavLink>
        </p>
        <NavLink to='/signin'>
          <button type='button'>Войти</button>
        </NavLink>
      </div>
    </div>
  )
}
export default SignInUp
