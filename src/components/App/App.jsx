import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  const { pathname } = useLocation();

  const footerSection =
    pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    <CurrentUserContext.Provider value={{}}>
      <div className="page">
        <>
          <Routes>
            <Route
              path='/'
              element={<Main />}
            />
            <Route
              path='/movies'
              element={<Movies textButton='Сахранить' />}
            />
            <Route
              path='/saved-movies'
              element={<SavedMovies textButton='x' />}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/signup'
              element={<Register />}
            />
            <Route
              path='/signin'
              element={<Login />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </>
        {footerSection && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
