import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';

import { AuthLayout } from '../../layouts';
import { startRegister } from '../../store';
import './css/RegisterPage.css';

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector( state => state.auth );

  const formValidations = {
    name: [ (name) => name.length > 2, 'El nombre es obligatorio.' ],
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'La contraseña debe contener al menos una mayuscula, una minuscula, un número, un carácter especial y un minimo de 8 caracteres.' ],
    confirmPassword: [ (confirmPassword, password) => confirmPassword === password, 'Las contraseña no coinciden.' ]
  };

  const [ formSubmit, setFormSubmit ] = useState(false);
  const { formState, name, email, password, confirmPassword, onInputChange, isFormValid, nameValid, emailValid, passwordValid, confirmPasswordValid } = useForm( initialForm, formValidations );

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmit(true);

    if ( !isFormValid ) return;
    dispatch( startRegister( formState ) );
  }

  return (
    <AuthLayout title={ 'Iniciar Sesión' } >
      <div className="RegisterPage__content">
        <div className='' >
          <small className='' >#Calendario</small>
          <h4 className='' >Registrate para administrar tu día a día</h4>
          <h3 className='' >Administra toda tu agenda</h3>
          <h2 className='' >Con nosotros</h2>
        </div>
      </div>

      <div className="RegisterPage">
        <div className="RegisterPage__container animate__animated animate__slideInRight">
          <h1 className='RegisterPage__title' >Registro</h1>

          { !!errorMessage && <div className="Modal__message-error" >{ errorMessage }</div> }

          <form 
            onSubmit={ handleSubmit }
            className="RegisterPage__register"
          >
            <div>
              <div className={`Modal__group ${ (!!nameValid && formSubmit) ? 'Modal__group-error' : '' }`} >
                <input
                  id="name"
                  type="text"
                  className="Modal__input"
                  placeholder=" "
                  name="name"
                  autoComplete="off"
                  value={ name }
                  onChange={ onInputChange }
                />
                <label htmlFor="name" className="Modal__label">Nombre</label>
              </div>

              <span className="Modal__span">{ formSubmit && nameValid }</span>
            </div>

            <div>
              <div className={`Modal__group ${ (!!emailValid && formSubmit) ? 'Modal__group-error' : '' }`} >
                <input
                  className="Modal__input"
                  id="email"
                  type="email"
                  placeholder=" "
                  name="email"
                  autoComplete="off"
                  value={ email }
                  onChange={ onInputChange }
                />
                <label htmlFor="email" className="Modal__label">Email</label>
              </div>

              <span className="Modal__span">{ formSubmit && emailValid }</span>
            </div>

            <div>
              <div className={`Modal__group ${ (!!passwordValid && formSubmit) ? 'Modal__group-error' : '' }`} >
                <input
                  className="Modal__input"
                  id="password"
                  type="password"
                  placeholder=" "
                  name="password"
                  autoComplete="off"
                  value={ password }
                  onChange={ onInputChange }
                />
                <label htmlFor="password" className="Modal__label">Contraseña</label>
              </div>
              <span className="Modal__span">{ formSubmit && passwordValid }</span>
            </div>

            <div>
              <div className={`Modal__group ${ (!!confirmPasswordValid && formSubmit) ? 'Modal__group-error' : '' }`} >
                <input
                  id="confirmPassword"
                  type="password"
                  className="Modal__input"
                  placeholder=" "
                  name="confirmPassword"
                  autoComplete="off"
                  value={ confirmPassword }
                  onChange={ onInputChange }
                />
                <label htmlFor="confirmPassword" className="Modal__label">Confirmar Contraseña</label>
              </div>

              <span className="Modal__span">{ formSubmit && confirmPasswordValid }</span>
            </div>

            <button type="submit" className="btn btn__container LoginPage__submit" id="enviar_LoginPage" disabled={ isLoading } >
              <span className="txt">
                { isLoading ? 'Creando' : 'Crear Cuenta'}
              </span>

              <span className={`spinner ${ isLoading ? 'spinner__active' : ''}`}>
                <VscLoading className='spinner__loading' />
              </span>
            </button>
          </form>
          
          <div className='RegisterPage__links'>
            <Link 
              to='/auth/login'
              className='RegisterPage__link'
            >
              Inicia Sesión
            </Link>

            <Link 
              to='/auth/login'
              className='RegisterPage__link'
            >
              Olvidé mi contraseña
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
