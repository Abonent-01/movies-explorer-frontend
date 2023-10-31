import React, {useEffect, useRef, useState} from 'react'
import './SavedMovies.css'
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MoviesList/MovieList";
import Preloader from "../../components/Preloader/Preloader";
import {
  sortedMoviesSearch,
  sortShortMovies,
  handleLocalStorage,
  handleSaveToLocalStorage
} from "../../utils/utils";
import {getSavedMovies} from "../../utils/MainApi";

const SavedMovies = ({ savedMovies, setSavedMovies, deleteMovie }) => {
  const searchInputRef = useRef(null)
  const [preloader, setPreloader] = useState(false)
  const [searchMessageError, setSearchMessageError] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [error, setError] = useState(false)
  const [shortMovies, setShortMovies] = useState(false)
  // ====================================================================================================

  useEffect(() => {
    async function fetchData() {
      setPreloader(true)
      try {
        const data = await getSavedMovies()
        await setSavedMovies(data.reverse())
        handleSaveToLocalStorage('movieListSaved', data)

      } catch (error) {
        console.error(error)
      } finally {
        setPreloader(false)
      }
    }

    fetchData()

  }, [setSavedMovies]);

  const moviesSavedInLocalStorage = handleLocalStorage('movieListSaved') || [];

  const handleSearch = async () => {
    setSearchMessageError(false)
    const searchTerm = searchInputRef.current.value

    if (!searchTerm.trim()) {
      setShowMessage(true)
      return
    } else {
      setShowMessage(false)
      setPreloader(true)

      try {
        const movieListFilteredByKeyword = await sortedMoviesSearch(moviesSavedInLocalStorage, searchTerm.trim())
        const resultFilteredMovieList = await sortShortMovies(movieListFilteredByKeyword, shortMovies)
        setSavedMovies(resultFilteredMovieList)
        if (resultFilteredMovieList.length === 0) {
          setSearchMessageError(true)
          return;
        }
      } catch (error) {
        setError(true)
        console.error(error)
      } finally {
        setPreloader(false)
      }
    }
  }

  const handlerDisplayShortMovies = (shortMovies) => {
    setSearchMessageError(false)

    const searchTerm = searchInputRef.current.value

    const movieListFilteredByKeyword = sortedMoviesSearch(moviesSavedInLocalStorage, searchTerm.trim())
    const resultFilteredMovieList = sortShortMovies(movieListFilteredByKeyword, shortMovies)
    setSavedMovies(resultFilteredMovieList)

    if (resultFilteredMovieList.length === 0) {
      setSearchMessageError(true)
      return;
    }
  }

  return (
    <section className='saved-movies'>
      <SearchForm
        searchInputRef={searchInputRef}
        handleSearch={handleSearch}
        showMessage={showMessage}
        onFilter={handlerDisplayShortMovies}
        setShortMovies={setShortMovies}
        shortMovies={shortMovies}
      />
      {preloader ?
        <Preloader /> :
        !showMessage && (
          <MovieList
            movies={savedMovies}
            deleteMovie={deleteMovie}
            error={error}
            searchMessageError={searchMessageError}
          />
        )}
    </section>
  )
}
export default SavedMovies
