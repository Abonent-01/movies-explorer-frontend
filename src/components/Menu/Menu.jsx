import {NavLink} from "react-router-dom";
import accountIcon from "../../images/header_icon.svg";

import './Menu.css'

const Menu = ({ pathname, toggleMenu }) => {
  return (
    <>
      <section className="menu">
        <ul className='menu_list'>
          {toggleMenu && (
            <li className='menu_item'>
              <NavLink to='/'
                       className={pathname === '/' ? 'menu_link_active menu_link' : 'menu_link'}
                       style={{fontWeight: pathname === '/' ? '500' : undefined}}
              >
                Главная
              </NavLink>
            </li>
          )}
          <li className='menu_item'>
            <NavLink to='/movies'
                     className={pathname === '/movies' ? 'menu_link_active menu_link' : 'menu_link'}
                     style={{fontWeight: pathname === '/movies' ? '500' : undefined}}
            >
              Фильмы
            </NavLink>
          </li>
          <li className='menu_item'>
            <NavLink to='/saved-movies'
                     className={pathname === '/saved-movies' ? 'menu_link_active menu_link' : 'menu_link'}
                     style={{fontWeight: pathname === '/saved-movies' ? '500' : undefined}}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <div className="menu_account">
          <p
            className={pathname === '/profile' ? 'menu_link_active' : undefined}
            style={{fontWeight: pathname === '/profile' ? '500' : undefined}}
          >
            <NavLink to='/profile'>Аккаунт</NavLink>
          </p>
          <NavLink to='/profile'>
            <div className={pathname === '/' ? 'menu_account_div menu_account_div_color_blue' : 'menu_account_div'}>
              <img src={accountIcon} alt="profile mage"/>
            </div>
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Menu
