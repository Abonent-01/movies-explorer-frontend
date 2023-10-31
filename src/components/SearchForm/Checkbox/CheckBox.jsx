import React from 'react'
import './CheckBox.css'

const Checkbox = ({ onFilter, shortMovies, setShortMovies }) => {
  const handleOnChange = () => {
    const stateShortMovies = !shortMovies
    setShortMovies(stateShortMovies)
    onFilter(stateShortMovies)
  }

  return (
  <div className="filter-checkbox search-form__switch">
    <label className='switch'>
      <input type='checkbox' checked={shortMovies} onChange={handleOnChange} className={shortMovies ? 'active' : null} />
      <span className={shortMovies ? 'slider slider_active' : 'slider'} ></span>
    </label>
    <p>Короткометражки</p>
  </div>
  )
}
export default Checkbox
