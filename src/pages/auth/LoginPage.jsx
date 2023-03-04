import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { useForm } from '../../hooks';
import { AuthLayout } from '../../layouts';
import { startLogin } from '../../store';
import './css/LoginPage.css';

const initialForm = {
  email: 'correo@correo.com',
  password: '',
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector( state => state.auth );

  const formValidations = {
    email: [ (value) => value.includes('@'), 'Tiene que ser un email válido.' ],
    password: [ (value) => value.length > 7, 'La contraseña debe tener al menos 8 caracteres.' ]
  };

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const { formState, email, password, onInputChange, isFormValid, emailValid, passwordValid } = useForm( initialForm, formValidations );

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startLogin( formState ) );
  }

  return (
   <AuthLayout >
      <div className="LoginPage">
        <div className="LoginPage__container animate__animated animate__slideInLeft">
          <h1 className='LoginPage__title' >Login</h1>
          <form
            onSubmit={ handleSubmit }
            className="LoginPage__form"
          >
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
              <span className="Modal__message">{ formSubmitted && emailValid }</span>
            </div>

            <div className={`Modal__group ${ ( !!passwordValid && formSubmitted) ? 'Modal__group-error' : '' } `} >
              <input
                id="password"
                type="Password"
                className="Modal__input"
                placeholder=" "
                name="password"
                autoComplete="off"
                value={ password }
                onChange={ onInputChange }
              />
              <label htmlFor="password" className="Modal__label">Password</label>
              <span className="Modal__message">{ formSubmitted && passwordValid }</span>
            </div>

            { errorMessage && <div className="Modal__group-error" >{ errorMessage }</div> }
            
            <button type="submit" className="btn btn__container LoginPage_submit" id="enviar_LoginPage" disabled={ isLoading } >
              <span className="txt">
                { isLoading ? 'Authenticando' : 'Iniciar Sesión'}
              </span>

              <span className={`spinner ${ isLoading ? 'spinner__active' : ''}`}>
                <VscLoading className='spinner__loading' />
              </span>
            </button>
          </form>
          <span>
            ¿No tienes una Cuenta? <Link to='/auth/register' >Registrate</Link> 
          </span>
        </div>
      </div>

      <div className="LoginPage__info">
        <div className='LoginPage__content' >
          <small className='' >#Administra tu Agenda</small>
          <h4 className='' >Ingresa y Gestiona tu Agenda</h4>
          <h3 className='' >Administra toda tu agenda</h3>
          <h2 className='' >Con nosotros</h2>
        </div>
      </div>
   </AuthLayout>
  )
}
