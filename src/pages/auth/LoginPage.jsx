import { Link } from 'react-router-dom';
import { BiTask } from 'react-icons/bi';
import { VscLoading } from 'react-icons/vsc';

import { AuthLayout } from '../../layouts';
import { useForm, useLogin } from '../../hooks';
import { ErrorMessageAPI } from '../../components';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const formValidations = {
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => password.length > 7, 'La contraseña debe contener un mínimo de 8 caracteres.' ],
  };

  const { 
    formState, email, password, onInputChange, isFormValid, emailValid, passwordValid , onResetForm
  } = useForm( initialForm, formValidations );

  const { 
    errorMessage, isLogin, formSubmitted, isLoading, handleSubmit 
  } = useLogin( formState, isFormValid, onResetForm );
  
  return (
   <AuthLayout >
      <main className="auth__container">
        <div className="auth__content animate__animated animate__slideInLeft">
          <h1 className='auth__title' >BIENVENIDO</h1>

          <form
            onSubmit={ handleSubmit }
            className="form"
          >
            <div className='form__content'>
              <div className={`form__group ${ !!emailValid && formSubmitted ? 'form__group-error' : '' }`} >
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
              <div className={`form__group ${ ( !!passwordValid && formSubmitted) ? 'form__group-error' : '' } `} >
                <input
                  className="form__input"
                  id="password"
                  type="Password"
                  placeholder=" "
                  name="password"
                  autoComplete="off"
                  value={ password }
                  onChange={ onInputChange }
                />
                <label htmlFor="password" className="form__label">Password</label>
              </div>
              <span className="form__span">{ formSubmitted && passwordValid }</span>
            </div>

            { (errorMessage  && isLogin) && <ErrorMessageAPI messageError={ errorMessage } /> }
            
            <button type="submit" className="form__submit" disabled={ isLoading } >
              <span className="form__submit-text">
                { isLoading ? 'Authenticando' : 'Iniciar Sesión'}
              </span>

              <span className={`form__spinner ${ isLoading ? 'form__spinner-active' : ''}`}>
                <VscLoading className='form__loading' />
              </span>
            </button>
          </form>

          <div className='auth__links'>
            <div className='auth__links-container'>
              <Link to='/auth/forgot-password' className='auth__link' >Olvidé mi contraseña</Link>
            </div>
            
            <div className='auth__links-container'>
              <Link to='/auth/register' className='auth__link' >Registrarme</Link> 
            </div>
          </div>
        </div>
      </main>

      <div className="auth__info">
        <div className="auth__slogan">
          <span className="auth__slogan-hashtag" ><BiTask /> Administra tu Agenda</span>
          <h2 className="auth__slogan-message" >Ingresa y Gestiona tu Agenda</h2>
          <h2 className="auth__slogan-title" >Distrufa de una interfaz</h2>
          <h2 className="auth__slogan-title" >Fácil y amigable</h2>
        </div>
      </div>
   </AuthLayout>
  )
}
