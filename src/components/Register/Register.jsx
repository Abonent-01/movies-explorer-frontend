import React from 'react';
import './Register.css'
import Form from '../Form/Form';

const Register = () => {
  return (
    <main className='register'>
      <Form
        title='Добро пожаловать!'
        buttonName='Зарегестрироваться'
        spanText='Уже зарегистрированы?'
        spanPatch='/signin'
        spanLink='Войти'
      >
        <label className='form__label' htmlFor='name'>Имя</label>
        <input className='form__input' id='name' type='text' placeholder='Введите имя' required minLength='2' maxLength='40'/>
        <span className='form__span'>Что-то пошло не так</span>

        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' type='text' placeholder='Укажите почту' required />
        <span className='form__span'> Что-то пошло не так </span>

        <label className='form__label' htmlFor='password'> Пароль </label>
        <input className='form__input form__input-error' id='name' type='password' placeholder='Придумайте пароль' required minLength='2' maxLength='10'/>
        <span className='form__span form__span_error-register'> Что-то пошло не так </span>
      </Form>
    </main>
  );
};

export default Register;

