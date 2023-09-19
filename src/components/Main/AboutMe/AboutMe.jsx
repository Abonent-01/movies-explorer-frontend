import React from 'react';
import { Link } from 'react-router-dom';

import Portfolio from '../Portfolio/Portfolio';
import avatar from '../../../images/photo.png';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__wrap'>
        <div className='about-me__content'>
          <h3 className='about-me__content-name'>Виталий</h3>
          <p className='about-me__content-subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='about-me__content-info'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className='about-me__git'
            to={'https://github.com/Abonent-01'}
            target='_blank'
            rel='noreferrer'
          >
            Github
          </Link>
        </div>
        <img
          className='about-me__avatar'
          src={avatar}
          alt='фотография Виталия'
        />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;