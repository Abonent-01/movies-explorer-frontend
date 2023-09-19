import React from "react";
import './Navigation.css';
import { Link, useLocation } from "react-router-dom";
import NavigationMain from './NavigationMain/NavigationMain';
import NavigationProfile from './NavigationProfile/NavigationProfile';
import logo from './../../images/logo.svg';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className='nav'>
      <Link to='/' tabIndex={1}>
        <img className='nav__logo' src={logo} alt='Изображение логотипа' />
      </Link>
      {location.pathname === '/' ? <NavigationMain /> : <NavigationProfile />}
    </nav>
  )
}

export default Navigation;