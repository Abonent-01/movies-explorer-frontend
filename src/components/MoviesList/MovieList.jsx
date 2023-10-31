import {useLocation} from "react-router-dom";
import './MovieList.css'
import {useCallback} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import {
  CARDS_TO_ADD_1280,
  CARDS_TO_ADD_320,
  CARDS_TO_ADD_768,
  SCREEN_WIDTH_L,
  SCREEN_WIDTH_M
} from "../../utils/constants";

const MovieList = ({
  screenWidth,
  searchMessageError,
  onReturnClick,
  error,
  setShowMovies,
  movies,
  endIndex,
  saveMovie,
  deleteMovie,
}) => {
  const pathname = useLocation().pathname

  const handleLoadMore = useCallback(() => {
    if (screenWidth >= SCREEN_WIDTH_L) {
      setShowMovies((prevState) => prevState + CARDS_TO_ADD_1280)
    } else if (screenWidth > SCREEN_WIDTH_M && screenWidth < SCREEN_WIDTH_L) {
      setShowMovies((prevState) => prevState + CARDS_TO_ADD_768)
    } else if (screenWidth <= SCREEN_WIDTH_M) {
      setShowMovies((prevState) => prevState + CARDS_TO_ADD_320)
    }

  }, [screenWidth, setShowMovies])

  return (
    <div className="movies-cards__wrapper">
    {searchMessageError ? (
      <MoviesNotFound onReturnClick={onReturnClick} error={error} />
      ) : (
      <div className="movies-cards__container">
        {movies.slice(0, endIndex).map((movie, _index) => (
          <MoviesCard
            key={movie.id || _index}
            movie={movie}
            saveMovie={saveMovie}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>
        )}
      {pathname === '/movies' &&
        <button
        className="movies-cards__btn-more"
        type='button'
        onClick={handleLoadMore}
        style={{visibility: movies.length !== 0 && endIndex < movies.length ? 'visible' : 'hidden'}}
      >Ещё
      </button>
      }
    </div>
  )
}

export default MovieList
