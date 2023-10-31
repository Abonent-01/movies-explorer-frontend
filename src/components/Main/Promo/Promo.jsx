import React from 'react';
import './Promo.css';
import { Link } from 'react-scroll';
import Web from '../../../images/promo.svg';

const Promo = () => {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__container-intro'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className='promo__link'
            to='about-poject'
            smooth={true}
            duration={300}
          >
            Узнать больше
          </Link>
        </div>
        <img
          className='promo__web'
          src={Web}
          alt='Изображение веб-символ'
        />
      </div>
    </section>
  );
};

export default Promo;
