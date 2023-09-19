import React from 'react';
import './Menu.css';
import { Link, NavLink } from 'react-router-dom';
import icon from "../../../../images/header_icon.svg"

const Menu = ({ isOpenMenu }) => {
  return (
    <section className={`menu ${isOpenMenu ? 'menu_active' : ''}`}>
      <div className={`menu__overlay ${isOpenMenu ? 'menu__overlay_active' : ''}`}></div>
      <div className='menu__wrap'>
        <nav className='menu__nav'>
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
            to='/'
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
            to='/movies'
          >
            Фильмы
          </NavLink>
          <NavLink
            className={({ isActive }) => `menu__link ${isActive ? 'active' : ''}`}
            to='/saved-movies'
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <Link
          className='menu__profile'
          to='/profile'
        >
          <div className='menu__profile-wrap'>
            <img className='menu__profile-icon' src={icon} alt="Иконка профиля" />
          </div>
          Аккаунт
        </Link>
      </div>
    </section>
  );
};

export default Menu;