import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import './App.css'
import {useEffect, useState} from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from '../../utils/auth'
import useFormValidation from "../../hooks/useFormValidation";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import * as MainAPI from '../../utils/MainApi'
import {handleLocalStorage, handleSaveToLocalStorage} from "../../utils/utils";
import {SERVER_URL} from "../../utils/constants";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' })
  const [savedMovies, setSavedMovies] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

  const { resetForm } = useFormValidation()


  
  useEffect(() => {
    checkToken()
    
  }, []);

  const checkToken = async () => {
    try {
      const data = await auth.getContent()
      if (!data) return;

      if (data.status !== 401) {
        setIsLoggedIn(true)
        navigate(pathname, {replace: true})

        setCurrentUser((prevState) => ({
          ...prevState,
            name: data.name,
            email: data.email
        }))
      }

    } catch (error) {
      setIsLoggedIn(false)
      console.error(`Error: ${error.message}`)
    }
  }

  const handleOnLogin = () => {
    setIsLoggedIn(true)
    navigate('/movies', { replace: true })
  }

  const handleOnLogout = async () => {
    try {
      await auth.logout()
      setIsLoggedIn(false)
      navigate('/', { replace: true })
      resetForm()
      setCurrentUser({ name: "", email: ""})
      localStorage.clear()
    } catch (error) {
      console.error(`Error: ${error.message}`)
    }
  }

  const handleReturn = () => {
    navigate(-1)
  }

  const handlerSaveMovies = async (movie) => {
    try {
      const data = await MainAPI.addMoviesToList({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${SERVER_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `${SERVER_URL}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      setSavedMovies([data, ...savedMovies])
      handleSaveToLocalStorage('movieListSaved', [data, ...savedMovies])

    } catch (error) {
      console.error(error)
    }
  }

  const handleDeleteSavedMovies = async (movie) => {
    let movieId = movie._id

    try {
      if (!movieId && savedMovies.length > 0) {

        const movieFounded = savedMovies.find(m => m.movieId === movie.id)

        if (movieFounded) {
          movieId = movieFounded._id
        }
      }

      if (movieId) {
        const moviesFromLocalStorage = handleLocalStorage('movieListSaved' || [])
        await MainAPI.deleteMoviesFromList(movieId)
        setSavedMovies(savedMovies.filter(m => m._id !== movieId))
        handleSaveToLocalStorage('movieListSaved', moviesFromLocalStorage.filter(m => m._id !== movieId))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile') && <Header isLoggedIn={isLoggedIn} />}
        <main className='main'>
          <Routes>
            <Route path="/" index={true} element={<Main />} />
            <Route path="/signup" element={
              <ProtectedRoute isLoggedIn={!isLoggedIn} element={Register} handleOnLogin={handleOnLogin} setCurrentUser={setCurrentUser} />
            } />
            <Route path="/signin" element={
              <ProtectedRoute isLoggedIn={!isLoggedIn} element={Login} handleOnLogin={handleOnLogin} setCurrentUser={setCurrentUser} />
            } />
            <Route path="/movies" element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={Movies}
                saveMovie={handlerSaveMovies}
                deleteMovie={handleDeleteSavedMovies}
              />
            }
            />
            <Route path="/saved-movies" element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                element={SavedMovies}
                savedMovies={savedMovies}
                setSavedMovies={setSavedMovies}
                deleteMovie={handleDeleteSavedMovies}
              />
            }
            />
            <Route path="/profile" element={
              <ProtectedRoute setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn} handleOnLogout={handleOnLogout} element={Profile} />
            }
            />
            <Route path="*" element={<NotFound handleReturn={handleReturn} />} />
          </Routes>
        </main>

        {(pathname === '/' || pathname === '/movies' || pathname === '/saved-movies') &&  <Footer />}
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
