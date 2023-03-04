import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';

import { AuthLayout } from '../../layouts';
import { startRegister } from '../../store';
import './css/RegisterPage.css';

const initialForm = {
  name: 'renatin',
  email: 'rena@soca.com',
  password: 'Renato18!',
  confirmPassword: 'Renato18!',
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const { errorMessage } = useSelector( state => state.auth );

  const formValidations = {
    name: [ (name) => name.length > 2, 'El nombre es obligatorio.' ],
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'La contraseña debe contener al menos una mayuscula, una minuscula, un número, un carácter especial y un minimo de 8 caracteres.' ],
    confirmPassword: [ (confirmPassword, password) => confirmPassword === password, 'Las contraseña no coinciden.' ]
  };

  const [ formSubmit, setFormSubmit ] = useState(false);
  const { formState, name, email, password, confirmPassword, onInputChange, isFormValid, nameValid, emailValid, passwordValid, confirmPasswordValid } = useForm( initialForm, formValidations );

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
          <form 
            onSubmit={ handleSubmit }
            className="RegisterPage__register"
          >
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
              <span className="Modal__message">{ formSubmit && nameValid }</span>
            </div>

            <div className={`Modal__group ${ (!!emailValid && formSubmit) ? 'Modal__group-error' : '' }`} >
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
              <span className="Modal__message">{ formSubmit && emailValid }</span>
            </div>

            <div className={`Modal__group ${ (!!passwordValid && formSubmit) ? 'Modal__group-error' : '' }`} >
              <input
                id="password"
                type="password"
                className="Modal__input"
                placeholder=" "
                name="password"
                autoComplete="off"
                value={ password }
                onChange={ onInputChange }
              />
              <label htmlFor="password" className="Modal__label">Contraseña</label>
              <span className="Modal__message">{ formSubmit && passwordValid }</span>
            </div>

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
              <span className="Modal__message">{ formSubmit && confirmPasswordValid }</span>
            </div>

            { !!errorMessage && <div className="Modal__group-error" >{ errorMessage }</div> }

            <input type="submit" className="btn login_submit" id="enviar_login" value="Iniciar sesión" />
          </form>
          
          <span>
            ¿Ya tienes una cuenta? <Link to='/auth/login' >Inicia Sesión</Link> 
          </span>
        </div>
      </div>
    </AuthLayout>
  )
}
