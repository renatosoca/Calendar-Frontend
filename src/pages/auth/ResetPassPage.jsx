import { Link, useParams } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { AuthLayout } from '../../layouts';
import { useForm, useResetPass } from '../../hooks';
import { ErrorMessageAPI, SuccessMessageAPI } from '../../components';

const initialForm = {
  password: '',
  confirmPassword: '',
}

export const ResetPassPage = () => {
  const { token } = useParams();

  const formValidations = {
    password: [ (password) => (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/).test(password), 'Se requiere al menos una mayúscula, una minúscula, un número, un carácter especial y un mínimo de 8 caracteres.' ],
    confirmPassword: [ (confirmPassword, password) => confirmPassword === password, 'Las contraseña no coinciden.' ]
  };

  const { 
    formState, password, confirmPassword, onInputChange, isFormValid, passwordValid, confirmPasswordValid, onResetForm
  } = useForm( initialForm, formValidations );

  const { 
    errorMessage, successMessage, isResetPass, formSubmitted, isLoading, handleSubmit
  } = useResetPass( { password: formState.password, token }, isFormValid, onResetForm );
  
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
          <h1 className='auth__title' >NUEVA CONTRASEÑA</h1>

          <form 
            onSubmit={ handleSubmit }
            className="form"
          >
            { (!!successMessage && isResetPass) && <SuccessMessageAPI messageSuccess={ successMessage } /> }

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

            { (!!errorMessage  && isResetPass) && <ErrorMessageAPI messageError={ errorMessage } /> }

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
