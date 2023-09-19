import React from "react";
import './MoviesCard.css';
import { useState } from "react";

const MoviesCard = ({ movie, textButton }) => {

  const [isSaved, setIsSaved] = useState(false);

  const handleClickSave = () => {
    setIsSaved(isSaved => !isSaved);
  }

  const saveMovieButton = (
    `movie__button-save ${isSaved && 'movie__button-saved'}`
  );

  return (
    <li className='movie'>
      <div className='movie__info'>
        <h2 className='movie__title'>{movie.title}</h2>
        <p className='movie__duration'>{movie.duration}</p>
      </div>
      <img
        className='movie__poster'
        src={movie.poster}
        alt={`Movie poster: ${movie.title}`}
      />
      <button
        className={saveMovieButton}
        onClick={handleClickSave}
        type='button'>
        {!isSaved ? textButton : null}
      </button>
    </li>

  );
};

export default MoviesCard;