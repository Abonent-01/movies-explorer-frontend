import {useLocation} from "react-router-dom";
import {useState} from "react";
import './MoviesCard.css'

function DurationConverter({ minutes }) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return <p className='card__duration'>{hours}ч {remainingMinutes}м</p>
}

const MoviesCard = ({ movie, saveMovie, deleteMovie }) => {
  const pathname = useLocation().pathname
  const [isSavedMovie, setIsSavedMovie] = useState(movie.saved)

  const handleAddMovie = () => {
    saveMovie(movie)
    setIsSavedMovie(!isSavedMovie)
  }

  const handleDeleteMovie = () => {
    deleteMovie(movie)
    setIsSavedMovie(!isSavedMovie)
  }

  return (
    <div className='movies-card card '>
      <div className="card__container">
        <div className="card__wraper">
          <h3 className="card__title">{movie.nameRU}</h3>
          <DurationConverter minutes={movie.duration} />
        </div>

        <a href={movie.trailerLink} target='_blank' rel="noreferrer">
          <img src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt="Movie Poster" className="card__img flip-in-diag-1-tr"/>
        </a>
        {} {}
        {pathname === '/movies' && isSavedMovie ?
          <button className='button button_type_add' type='button' onClick={handleDeleteMovie}>&#10003;</button> :
          pathname !== '/saved-movies' &&
          <button className='button button_type_text' type='button' onClick={handleAddMovie}>Сохранить</button>
        }
        {}
        {pathname === '/saved-movies' && <button className='button button_type_remove' type='button' onClick={handleDeleteMovie}>&#10006;</button>}
      </div>
    </div>
  )
}
export default MoviesCard
