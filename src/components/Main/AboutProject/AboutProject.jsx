import React from 'react';
import './AboutProject.css'

const AboutProject = () => {
  return (
    <section
      className='about-poject' id='about-poject'>
      <h2 className='about-poject__title'>О проекте</h2>
      <ul className='about-poject__info'>
        <li className='about-poject__info-element'>
          <h3 className='about-poject__info-subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='about-poject__info-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='about-poject__info-element'>
          <h3 className='about-poject__info-subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-poject__info-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-poject__step'>
        <h4 className='about-poject__step-mod about-poject__step-subtitle about-poject__step-subtitle_mod'>1 неделя</h4>
        <h4 className='about-poject__step-mod about-poject__step-subtitle'>4 недели</h4>
        <p className='about-poject__step-mod about-poject__step-end'>Back-end</p>
        <p className='about-poject__step-mod about-poject__step-end'>Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;