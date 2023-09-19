import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';


const SavedMovies = ({ textButton }) => {
  return (
    <>
      <Header />
      <main className='saved__movies'>
        <SearchForm />
        <MoviesCardList textButton={textButton} />
      </main>
    </>
  );
};

export default SavedMovies;