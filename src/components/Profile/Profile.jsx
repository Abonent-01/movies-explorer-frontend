import React from 'react';
import './Profile.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Profile = () => {

  const [name, setName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru')
  return (
    <main className='profile'>
      <Header />
      <section className='profile__content'>
        <h1 className='profile__title'>Привет, Виталий!</h1>
        <form className='profile__form'>
          <div className='profile__element'>
            <label className='profile__label'>
              <p className='profile__name'>Имя</p>
              <input
                className='profile__input'
                type='text'
                placeholder='Введите имя'
                value={name}
                onChange={(evt) => setName(evt.target.value)}
              />
            </label>
            <label className='profile__label'>
              <p className='profile__name'>E-mail</p>
              <input
                className='profile__input'
                type='text'
                placeholder='Укажите e-mail'
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
              />
            </label>
          </div>
          <div className='profile__buttons'>
            <button
              className='profile__buttons-submit'
              type='submit'
            >
              Редактировать
            </button>
            <Link
              className='profile__buttons-exit'
              to='/signin'>Выйти из аккаунта</Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;