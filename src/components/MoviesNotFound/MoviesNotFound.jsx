import React from 'react'
import './MoviesNotFound.css'

const MoviesNotFound = ({error}) => {

  return (
    <div className='movies-not-found'>
      <div className='movies-not-found__wraper wraper'>
        <h2 className='wraper_title'>{error ?
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' :
          'Ничего не найдено'
        }</h2>
        {}
      </div>
    </div>

  )
}
export default MoviesNotFound
