import React from 'react';
import './Login.css'
import Form from '../Form/Form';

const Login = () => {
  return (
    <section className='login'>
      <Form
        title='Рады видеть!'
        buttonName='Войти'
        spanText='Еще не зарегистрированы?'
        spanPatch='/signup'
        spanLink='Регистрация'
      >

        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' type='text' placeholder='Введите почту' required minLength='2' maxLength='40'/>
        <span className='form__span'> Что-то пошло не так </span>

        <label className='form__label' htmlFor='password'> Пароль </label>
        <input className='form__input' id='name' type='password' placeholder='Введите пароль' required />
        <span className='form__span form__span_error-login'> Что-то пошло не так </span>
      </Form>
    </section>
  );
};

export default Login;