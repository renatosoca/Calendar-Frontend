import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { AuthLayout } from '../../layouts';
import { useForm, useRegister } from '../../hooks';
import { ErrorMessageAPI, SuccessMessageAPI } from '../../components';
import { initialFormRegister, validationsFormRegister } from '../../data';

export const RegisterPage = () => {
  const { 
    formState, name, lastname, email, password, confirmPassword, onInputChange, isFormValid, nameValid, lastnameValid, emailValid, passwordValid, confirmPasswordValid, onResetForm
  } = useForm( initialFormRegister, validationsFormRegister );

  const { 
    errorMessage, successMessage, isRegister, formSubmitted, isLoading, handleSubmit
  } = useRegister( formState, isFormValid, onResetForm );
  
  return (
    <AuthLayout >
      <div className="auth__info">
        <div className='auth__slogan' >
          <small className='auth__slogan-hashtag' >#Calendario</small>
          <h3 className='auth__slogan-message' >Registrate para administrar tu día a día</h3>
          <h2 className='auth__slogan-title' >Administra toda tu agenda</h2>
          <h2 className='auth__slogan-title' >Con nosotros</h2>
        </div>
      </div>

      <main className="auth__container">
        <div className="auth__content animate__animated animate__slideInRight">
          <h1 className='auth__title' >REGISTRARME</h1>

          <form 
            onSubmit={ handleSubmit }
            className="form"
          >
            { (!!successMessage && isRegister) && <SuccessMessageAPI messageSuccess={ successMessage } /> }

            <div className='form__container'>
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
                <div className={`form__group ${ (!!nameValid && formSubmitted) ? 'form__group-error' : '' }`} >
                  <input
                    id="lastname"
                    type="text"
                    className="form__input"
                    placeholder=" "
                    name="lastname"
                    autoComplete="off"
                    value={ lastname }
                    onChange={ onInputChange }
                  />
                  <label htmlFor="lastname" className="form__label">Apellido</label>
                </div>

                <span className="form__span">{ formSubmitted && lastnameValid }</span>
              </div>
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

            { (!!errorMessage  && isRegister) && <ErrorMessageAPI messageError={ errorMessage } /> }

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
            <div className='auth__links-container'>
              <Link to='/auth/login' className='auth__link' >Iniciar sesión</Link> 
            </div>
            
            <div className='auth__links-container'>
              <Link to='/auth/forgot-password' className='auth__link' >Olvidé mi contraseña</Link>
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  )
}
