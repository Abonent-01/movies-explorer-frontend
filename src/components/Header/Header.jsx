import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ isLoggedIn }) => {
  const location = useLocation();

  return (
    <header className={location.pathname === '/' ? 'header' : 'header header_black'}>
      <div className="header__wrapper">
        <a href='/' className="header__logo">
          <img src={logo} alt="Logo"/>
        </a>
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
