import React from "react";
import './Form.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

const Form = ({ title, children, buttonName, spanText, spanPatch, spanLink }) => {
  return (
    <form className="form">
      <Link
        className="form__link"
        to={'/'}
      >
        <img
          className="form__logo"
          src={logo}
          alt="Логотип"
        />
      </Link>
      <h1 className="form__title">{title}</h1>
      {children}

      <button
        className="form__button"
        type="submit"
      >
        {buttonName}
      </button>
      <span
        className="form__button-span">
        {spanText}
        <Link
          className="form__button-span-link"
          to={spanPatch}>
          {spanLink}
        </Link>
      </span>

    </form>
  );
};

export default Form;