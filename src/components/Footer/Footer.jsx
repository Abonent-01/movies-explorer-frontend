import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <span className='footer__date'>&#169; 2020</span>
        <ul className='footer__links'>
          <li>
            <Link
              className='footer__link'
              to='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              className='footer__link'
              to='https://github.com/Abonent-01'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;