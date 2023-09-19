import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import './Movies.css';

const Movies = ({ textButton }) => {
  return (
    <>
      <Header />
      <main className='movies'>
        <SearchForm />
        <MoviesCardList textButton={textButton} />
        <button className='movies__more-button'>Еще</button>
      </main>
    </>

  );
};

export default Movies;