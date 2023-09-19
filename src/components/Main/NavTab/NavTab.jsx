import React from 'react';
import './NavTab.css';
import { Link } from 'react-scroll';

const NavTab = () => {
  return (
    <nav className='nav-tab'>
      <ul className='nav-tab__links'>
        <li>
          <Link
            className='nav-tab__link'
            to='about'
            smooth={true}
            duration={300}
          >
            О проекте
          </Link>
        </li>
        <li>
          <Link
            className='nav-tab__link'
            to='tech'
            smooth={true}
            duration={300}
          >
            Технологии
          </Link>
        </li>
        <li>
          <Link
            className='nav-tab__link'
            to='student'
            smooth={true}
            duration={300}
          >
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;