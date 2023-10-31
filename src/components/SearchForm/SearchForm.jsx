import Checkbox from "./Checkbox/CheckBox";
import './SearchForm.css'

const SearchForm = ({ searchInputRef, handleSearch, showMessage, onFilter, shortMovies, setShortMovies }) => {
const handleOnSubmit = (e) => {
  e.preventDefault()
  handleSearch()
}

  return (
    <form className='search-form' onSubmit={handleOnSubmit} noValidate>
      <div className="search-form__wrapper">
        <div className="search-form__container">
          <div className="search-form__input">
            <input
              type="text"
              ref={searchInputRef}
              minLength={1}
              placeholder='Фильм'
              required
            />
            <button type='submit' >Поиск</button>
          </div>
          {showMessage ? <p className='search-form__container_paragraph'>Нужно ввести ключевое слово</p> : null}
          <Checkbox onFilter={onFilter} shortMovies={shortMovies} setShortMovies={setShortMovies} />
        </div>
      </div>
    </form>
  )
}
export default SearchForm
