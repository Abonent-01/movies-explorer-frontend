import {useEffect, useRef, useState} from "react";
import './Movies.css'
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MoviesList/MovieList";
import {getMoviesData} from "../../utils/MoviesApi";
import Preloader from "../../components/Preloader/Preloader";
import {
  sortedMoviesSearch,
  sortShortMovies,
  handleLocalStorage,
  handleSaveToLocalStorage
} from "../../utils/utils";
import useWindowSize from "../../hooks/useWindowSize";
import {getSavedMovies} from "../../utils/MainApi";
import {
  INITIAL_NUMBER_OF_CARDS_1280,
  INITIAL_NUMBER_OF_CARDS_320,
  INITIAL_NUMBER_OF_CARDS_768,
  SCREEN_WIDTH_L,
  SCREEN_WIDTH_M
} from "../../utils/constants";


const Movies = ({ saveMovie, deleteMovie }) => {
  const searchInputRef = useRef(null)
  const [movies, setMovies] = useState([])
  const [savedMovieList, setSavedMovieList] = useState([])
  const [sortedMovies, setSortedMovies] = useState([])
  const [shortMovies, setShortMovies] = useState(false)
  const [preloader, setPreloader] = useState(false)
  const [searchMessageError, setSearchMessageError] = useState(null)
  const [showMessage, setShowMessage] = useState(false)
  const [error, setError] = useState(false)
  const [showMovies, setShowMovies] = useState(INITIAL_NUMBER_OF_CARDS_1280)
  const [screenWidth] = useWindowSize()

  useEffect(() => {
    const sortedInLocalStorage = handleLocalStorage('searchFiltered')
    const moviesSavedLocalStorage = handleLocalStorage('movieListSaved');

    setSavedMovieList(moviesSavedLocalStorage || [])

    if (sortedInLocalStorage) {
      setSortedMovies(sortedInLocalStorage.resultFilteredMovieList)
      searchInputRef.current.value = sortedInLocalStorage.searchTerm.trim()
      setShortMovies(sortedInLocalStorage.shortMovies)
    }
  }, [setSavedMovieList]);

  const checkIfMovieIsSaved = (movie, savedMovieList) => {
    return savedMovieList.find(prevState => prevState.movieId === movie.id)
  }

  const addedMovies = sortedMovies.map(movie => ({
    ...movie, saved: checkIfMovieIsSaved(movie, savedMovieList)
  }))

  const searchFromLocalStorage = handleLocalStorage('moviesListFromServer')

  const handleSearch = async () => {
    setSearchMessageError(false)

    const searchTerm = searchInputRef.current.value
    if (!searchTerm.trim()) {
      setShowMessage(true)

    } else {
      setShowMessage(false)
      setPreloader(true)

      try {
        if (searchFromLocalStorage) {
          const movieListFilteredByKeyword = await sortedMoviesSearch(searchFromLocalStorage, searchTerm.trim())
          const resultFilteredMovieList = await sortShortMovies(movieListFilteredByKeyword, shortMovies)
          handleSaveToLocalStorage('searchFiltered', {resultFilteredMovieList, searchTerm, shortMovies})
          setSortedMovies(resultFilteredMovieList)

          if (resultFilteredMovieList.length === 0) {
            setSearchMessageError(true)
          }
        } else {
          const data = await getMoviesData()
          const movieListFromSavedMovieList = await getSavedMovies()

          setMovies(data)
          setSavedMovieList(movieListFromSavedMovieList)

          handleSaveToLocalStorage('moviesListFromServer', data)
          handleSaveToLocalStorage('movieListSaved', movieListFromSavedMovieList)

          const movieListFilteredByKeyword = await sortedMoviesSearch(data, searchTerm.trim())
          const resultFilteredMovieList = await sortShortMovies(movieListFilteredByKeyword, shortMovies)

          handleSaveToLocalStorage('searchFiltered', {resultFilteredMovieList, searchTerm, shortMovies})
          setSortedMovies(resultFilteredMovieList)

          if (resultFilteredMovieList.length === 0) {
            setSearchMessageError(true)
          }
        }

      } catch (error) {
        setError(true)
        console.error(error)
      } finally {
        setPreloader(false)
      }
    }
  }

  const handleReturnClick = () => {
    searchInputRef.current.value = ''
  }

  const handlerDisplayShortMovies = (shortMovies) => {
    setSearchMessageError(false)

    const searchTerm = searchInputRef.current.value

    if (searchFromLocalStorage) {
      const movieListFilteredByKeyword = sortedMoviesSearch(searchFromLocalStorage, searchTerm.trim())
      const resultFilteredMovieList = sortShortMovies(movieListFilteredByKeyword, shortMovies)
      setSortedMovies(resultFilteredMovieList)
      handleSaveToLocalStorage('searchFiltered', {resultFilteredMovieList, searchTerm, shortMovies})

      if (resultFilteredMovieList.length === 0) {
        setSearchMessageError(true)
      }
    }
  }
  
  useEffect(() => {
    let cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_1280

    if (screenWidth >= SCREEN_WIDTH_L) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_1280

    } else if (screenWidth > SCREEN_WIDTH_M && screenWidth < SCREEN_WIDTH_L) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_768

    } else if (screenWidth <= SCREEN_WIDTH_M) {
      cardsInitialToShow = INITIAL_NUMBER_OF_CARDS_320
    }

    console.log(searchInputRef.current.value)

    setTimeout(() => {
      setShowMovies(cardsInitialToShow)
    }, 0)
  }, [screenWidth, searchInputRef?.current?.value]);


  return (
    <section className='movies'>
      <SearchForm
        searchInputRef={searchInputRef}
        handleSearch={handleSearch}
        showMessage={showMessage}
        onFilter={handlerDisplayShortMovies}
        setShortMovies={setShortMovies}
        shortMovies={shortMovies}
      />
      {preloader ?
        <Preloader/> :
        !showMessage && (
          <>
            <MovieList
              screenWidth={screenWidth}
              showMessage={showMessage}
              setSearchMessageError={setSearchMessageError}
              searchMessageError={searchMessageError}
              onReturnClick={handleReturnClick}
              error={error}
              setShowMovies={setShowMovies}
              movies={addedMovies}
              endIndex={showMovies}
              saveMovie={saveMovie}
              deleteMovie={deleteMovie}
            />
          </>
        )}
    </section>
  )
}
export default Movies