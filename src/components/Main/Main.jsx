import React from 'react';

import Promo from './Promo/Promo';
import Header from '../Header/Header';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    </>

  );
};

export default Main;