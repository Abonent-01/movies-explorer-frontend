import React, { useState, useEffect } from "react";
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import { moviesList, savedMoviesList } from "../../../utils/constants";
import { useLocation } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";

const MoviesCardList = ({ textButton }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <section className='movies__container'>
      {isLoading ? (
        <Preloader />
      ) : (
        <ul className='movies__list'>
          {location.pathname === '/movies' || location.pathname === '/movies' ? (
            moviesList.slice().map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                textButton={textButton}
              />
            ))
          ) : (
            savedMoviesList.slice().map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                textButton={textButton}
              />
            ))
          )}
        </ul>
      )}
    </section>
  );
}

export default MoviesCardList;