import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { useForm } from '../../hooks';
import { AuthLayout } from '../../layouts';
import { startLogin } from '../../store';
import './css/LoginPage.css';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector( state => state.auth );

  const formValidations = {
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'La contraseña debe contener al menos una mayuscula, una minuscula, un número, un carácter especial y un minimo de 8 caracteres.' ],
  };

  const [ isLogin, setIsLogin ] = useState(false)
  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const { formState, email, password, onInputChange, isFormValid, emailValid, passwordValid } = useForm( initialForm, formValidations );

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setIsLogin( true );
    setFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startLogin( formState ) );
  }

  return (
   <AuthLayout >
      <main className="Login">
        <div className="Login__container animate__animated animate__slideInLeft">
          <h1 className='Login__title' >Bienvenido</h1>

          { (errorMessage  && isLogin) && <div className="Modal__message-error" >{ errorMessage }</div> }

          <form
            onSubmit={ handleSubmit }
            className="Login__form"
          >
            <div>
              <div className={`Modal__group ${ !!emailValid && formSubmitted ? 'Modal__group-error' : '' }`} >
                <input
                  id="email"
                  type="email"
                  className="Modal__input"
                  placeholder=" "
                  name="email"
                  autoComplete="off"
                  value={ email }
                  onChange={ onInputChange }
                />
                <label htmlFor="email" className="Modal__label">Email</label>
              </div>
              <span className="Modal__span">{ formSubmitted && emailValid }</span>
            </div>

            <div>
              <div className={`Modal__group ${ ( !!passwordValid && formSubmitted) ? 'Modal__group-error' : '' } `} >
                <input
                  className="Modal__input"
                  id="password"
                  type="Password"
                  placeholder=" "
                  name="password"
                  autoComplete="off"
                  value={ password }
                  onChange={ onInputChange }
                />
                <label htmlFor="password" className="Modal__label">Password</label>
              </div>
              <span className="Modal__span">{ formSubmitted && passwordValid }</span>
            </div>
            
            <button type="submit" className="btn btn__container Login__submit" id="enviar_Login" disabled={ isLoading } >
              <span className="txt">
                { isLoading ? 'Authenticando' : 'Iniciar Sesión'}
              </span>

              <span className={`spinner ${ isLoading ? 'spinner__active' : ''}`}>
                <VscLoading className='spinner__loading' />
              </span>
            </button>
          </form>

          <div className='RegisterPage__links'>
            <Link to='/auth/register' className='RegisterPage__link' >Olvidé mi contraseña</Link>
            
            <Link to='/auth/register' className='RegisterPage__link' >Registrarme</Link> 
          </div>
        </div>
      </main>

      <div className="Login__info">
        <div className='Login__content' >
          <small className='' >#Administra tu Agenda</small>
          <h4 className='' >Ingresa y Gestiona tu Agenda</h4>
          <h3 className='' >Administra toda tu agenda</h3>
          <h2 className='' >Con nosotros</h2>
        </div>
      </div>
   </AuthLayout>
  )
}
