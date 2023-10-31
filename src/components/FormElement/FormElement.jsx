import logo from '../../images/logo.svg'
import './FormElement.css'
import FormButton from "../FormButton/FormButton";
import {NavLink} from "react-router-dom";

const FormElement = ({
   children,
   submitHandler,
   greetingMessage,
   textBtn,
   paragraph,
   link,
   span,
   isSubmitDisabled,
   isEntering,
   textOnSigningUp,
   textOnSigninIn
}) => {
  return (
    <section className='form-element'>
      <div className="form-element__wrapper">
        <a href='/' className="form-element__logo">
          <img src={logo} alt="Logo"/>
        </a>
        <h2 className="form-element__greeting">{greetingMessage}</h2>
        <form className="form-element__form form-form-element" onSubmit={submitHandler} noValidate>
          <fieldset className="form-form-element__fieldset">
            {children}
          </fieldset>
          <FormButton
            type='submit'
            text={textBtn}
            paragraph={paragraph}
            link={link}
            span={span}
            isSubmitDisabled={isSubmitDisabled}
            isEntering={isEntering}
            textOnSigningUp={textOnSigningUp}
            textOnSigninIn={textOnSigninIn}
          />
          <div className="form-element__text">
            <p>{paragraph}<span><NavLink to={link}>{span}</NavLink></span></p>
          </div>
        </form>
      </div>
    </section>
  )
}
export default FormElement
