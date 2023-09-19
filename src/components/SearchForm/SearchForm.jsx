import React from "react";
import './SearchForm.css';
import CheckBox from "../CheckBox/CheckBox";

const SearchForm = () => {
  return (
    <section className='movies__search-section'>
      <form className='movies__search-section-form'>
        <input
          className='movies__search-section-form-input'
          name='search'
          minLength='2'
          maxLength='40'
          type='text'
          placeholder='Фильм'
          required  
        />
        <button
          className='movies__search-section-form-button'
          type='button'
        >
          Поиск
        </button>
      </form>
      <CheckBox />
    </section>
  );
};

export default SearchForm;