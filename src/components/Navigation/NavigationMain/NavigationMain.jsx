import React from "react";
import { Link } from "react-router-dom";
import './NavigationMain.css';

const NavigationMain = () => {
  return (
    <div className='nav__main'>
      <div className='nav__main-links'>
        <Link
          className='nav__link nav__main-reg'
          to='/signup'
        >
          Регистрация
        </Link>
        <Link
          className='nav__link nav__main-signin'
          to='/signup'
        >
          Войти
        </Link>
      </div>
    </div>
  );
};

export default NavigationMain;