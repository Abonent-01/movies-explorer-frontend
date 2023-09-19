import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import GlobeWeb from '../../../images/landing-logo.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero__container'>
        <div className='hero__container-intro'>
          <h1 className='hero__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='hero__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className='hero__link'
            to='about'
            smooth={true}
            duration={300}
          >
            Узнать больше
          </Link>
        </div>
        <img
          className='hero__globe'
          src={GlobeWeb}
          alt='Иконка веб'
        />
      </div>
    </section>
  );
};

export default Hero;