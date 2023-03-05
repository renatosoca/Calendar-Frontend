import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { useForm, useLogin } from '../../hooks';
import { AuthLayout } from '../../layouts';

const initialForm = {
  email: '',
  password: '',
}

export const LoginPage = () => {

  const formValidations = {
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ],
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'La contraseña debe contener al menos una mayuscula, una minuscula, un número, un carácter especial y un minimo de 8 caracteres.' ],
  };

  const { 
    formState, email, password, onInputChange, isFormValid, emailValid, passwordValid 
  } = useForm( initialForm, formValidations );

  const { 
    errorMessage, isLogin, formSubmitted, isLoading, handleSubmit 
  } = useLogin( formState, isFormValid );
  
  return (
   <AuthLayout >
      <main className="auth">
        <div className="auth__container animate__animated animate__slideInLeft">
          <h1 className='auth__title' >BIENVENIDO</h1>

          { (errorMessage  && isLogin) && <div className="auth__message-error" >{ errorMessage }</div> }

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
            <Link to='/auth/register' className='auth__link' >Olvidé mi contraseña</Link>
            
            <Link to='/auth/register' className='auth__link' >Registrarme</Link> 
          </div>
        </div>
      </main>

      <div className="auth__info">
        <div className="auth__content">
          <small className="" >#Administra tu Agenda</small>
          <h4 className="" >Ingresa y Gestiona tu Agenda</h4>
          <h3 className="" >Administra toda tu agenda</h3>
          <h2 className="" >Con nosotros</h2>
        </div>
      </div>
   </AuthLayout>
  )
}
