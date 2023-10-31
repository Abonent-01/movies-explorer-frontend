import React, { useState } from 'react'
import './Navigation.css'
import Menu from '../Menu/Menu'
import Entry from "../SignInUp/SignInUp";
import iconClose from '../../images/icon-menu_close.svg'
import iconMenu from '../../images/icon__menu_open-small.svg'
import {useLocation} from "react-router-dom";

const Navigation = ({ isLoggedIn }) => {
  const [toggleMenu, setToggleMenu] = useState(false)


  const location = useLocation()
  const pathname = location.pathname


  return (
    <nav className='navbar'>
      {isLoggedIn ? (
        <>
          <div className="navbar-big-screens">
            <Menu pathname={pathname} />
          </div>
          <div className="header__menu">
            {toggleMenu ?
              <button onClick={() => setToggleMenu(false)} className='header__menu_btn header__menu_btn_type_closed' >
                <img src={iconClose} alt="Close Button"/>
              </button>
              :
              <button onClick={() => setToggleMenu(true)} className='header__menu_btn header__menu_btn_type_opened' >
                <img src={iconMenu} alt="Burger Menu Button"/>
              </button>
            }
            {toggleMenu && (
              <>
                <div className='overlay'></div>
                <div className="navbar-small-screens swing-in-top-fwd">
                  <Menu pathname={pathname} toggleMenu={toggleMenu} />
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <Entry />
      )}
    </nav>
  )
}
export default Navigation
