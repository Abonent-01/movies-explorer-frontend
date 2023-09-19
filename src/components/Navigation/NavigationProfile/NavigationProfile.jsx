import React from "react";
import { useState } from "react";
import './NavigationProfile.css'
import { Link, NavLink } from "react-router-dom";
import Menu from "./Menu/Menu";
import icon from "../../../images/header_icon.svg";

const NavigationProfile = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      {!isOpenMenu ? (
        <button className='nav__button-menu' onClick={toggleMenu} />
      ) : (
        <button className='button__menu-close' onClick={toggleMenu} />
      )}
      <Menu isOpenMenu={isOpenMenu} />
      <div className='nav__menu-profile'>
        <div className="nav__menu-profile-links">

          <NavLink
            className={({ isActive }) => `nav__menu-profile-link ${isActive ? 'active' : ''}`}
            to='/movies'
          >
            Фильмы
          </NavLink>

          <NavLink
            className={({ isActive }) => `nav__menu-profile-link ${isActive ? 'active' : ''}`}
            to='/saved-movies'
          >
            Сохраненные фильмы
          </NavLink>

        </div>
        <Link
          className='nav__menu-profile-account'
          to='/profile'
        >
          <div className='nav__menu-profile-box'>
            <img className='nav__menu-profile-icon' src={icon} alt="Иконка профиля" />
          </div>
          Аккаунт
        </Link>
      </div>
    </>
  )
}

export default NavigationProfile;