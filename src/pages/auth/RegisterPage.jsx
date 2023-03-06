import { Link } from 'react-router-dom';

import { MessageErrorApi } from '../../components';
import { AuthLayout } from '../../layouts';
import { useForm, useRegister } from '../../hooks';
import { VscLoading } from 'react-icons/vsc';

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const RegisterPage = () => {

  const formValidations = {
    name: [ (name) => name.length > 2, 'El nombre es obligatorio.' ],
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'La contraseña debe contener al menos una mayuscula, una minuscula, un número, un carácter especial y un minimo de 8 caracteres.' ],
    confirmPassword: [ (confirmPassword, password) => confirmPassword === password, 'Las contraseña no coinciden.' ]
  };

  const { 
    formState, name, email, password, confirmPassword, onInputChange, isFormValid, nameValid, emailValid, passwordValid, confirmPasswordValid 
  } = useForm( initialForm, formValidations );

  const { 
    errorMessage, isRegister, formSubmitted, isLoading, handleSubmit
  } = useRegister( formState, isFormValid );

  return (
    <AuthLayout >
      <div className="auth__info">
        <div className='auth__content' >
          <small className='' >#Calendario</small>
          <h4 className='' >Registrate para administrar tu día a día</h4>
          <h3 className='' >Administra toda tu agenda</h3>
          <h2 className='' >Con nosotros</h2>
        </div>
      </div>

      <main className="auth">
        <div className="auth__container animate__animated animate__slideInRight">
          <h1 className='auth__title' >REGISTRARME</h1>

          <form 
            onSubmit={ handleSubmit }
            className="form"
          >
            <div className='form__content'>
              <div className={`form__group ${ (!!nameValid && formSubmitted) ? 'form__group-error' : '' }`} >
                <input
                  id="name"
                  type="text"
                  className="form__input"
                  placeholder=" "
                  name="name"
                  autoComplete="off"
                  value={ name }
                  onChange={ onInputChange }
                />
                <label htmlFor="name" className="form__label">Nombre</label>
              </div>

              <span className="form__span">{ formSubmitted && nameValid }</span>
            </div>

            <div className='form__content'>
              <div className={`form__group ${ (!!emailValid && formSubmitted) ? 'form__group-error' : '' }`} >
                <input
                  className="form__input"
                  id="email"
                  type="email"
                  placeholder=" "
                  name="email"
                  autoComplete="off"
                  value={ email }
                  onChange={ onInputChange }
                />
                <label htmlFor="email" className="form__label">Email</label>
              </div>

              <span className="form__span">{ formSubmitted && emailValid }</span>
            </div>

            <div className='form__content'>
              <div className={`form__group ${ (!!passwordValid && formSubmitted) ? 'form__group-error' : '' }`} >
                <input
                  className="form__input"
                  id="password"
                  type="password"
                  placeholder=" "
                  name="password"
                  autoComplete="off"
                  value={ password }
                  onChange={ onInputChange }
                />
                <label htmlFor="password" className="form__label">Contraseña</label>
              </div>
              <span className="form__span">{ formSubmitted && passwordValid }</span>
            </div>

            <div className='form__content'>
              <div className={`form__group ${ (!!confirmPasswordValid && formSubmitted) ? 'form__group-error' : '' }`} >
                <input
                  id="confirmPassword"
                  type="password"
                  className="form__input"
                  placeholder=" "
                  name="confirmPassword"
                  autoComplete="off"
                  value={ confirmPassword }
                  onChange={ onInputChange }
                />
                <label htmlFor="confirmPassword" className="form__label">Confirmar Contraseña</label>
              </div>

              <span className="form__span">{ formSubmitted && confirmPasswordValid }</span>
            </div>

            { (!!errorMessage  && isRegister) && <MessageErrorApi messageError={ errorMessage } /> }

            <button type="submit" className="form__submit" disabled={ isLoading } >
              <span className="form__submit-text">
                { isLoading ? 'Creando cuenta' : 'Crear cuenta'}
              </span>

              <span className={`form__spinner ${ isLoading ? 'form__spinner-active' : ''}`}>
                <VscLoading className='form__loading' />
              </span>
            </button>
          </form>
          
          <div className='auth__links'>
            <Link 
              to='/auth/login'
              className='auth__link'
            >
              Inicia Sesión
            </Link>

            <Link 
              to='/auth/login'
              className='auth__link'
            >
              Olvidé mi contraseña
            </Link>
          </div>
        </div>
      </main>
    </AuthLayout>
  )
}
