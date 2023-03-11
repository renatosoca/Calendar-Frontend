import { Link } from 'react-router-dom';
import { VscLoading } from 'react-icons/vsc';

import { AuthLayout } from '../../layouts';
import { useForgotPass, useForm } from '../../hooks';
import { ErrorMessageAPI, SuccessMessageAPI } from '../../components';

const initialForm = {
  email: '',
}

export const ForgotPassPage = () => {

  const formValidations = {
    email: [ (email) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/).test(email), 'Tiene que ser un email válido.' ]
  };

  const { 
    formState, email, onInputChange, isFormValid, emailValid, onResetForm
  } = useForm( initialForm, formValidations );

  const { 
    errorMessage, successMessage, isForgot, formSubmitted, isLoading, handleSubmit
  } = useForgotPass( formState, isFormValid, onResetForm );

  return (
    <AuthLayout >
      <div className="auth__info">
        <div className='auth__slogan' >
          <small className='auth__slogan-hashtag' >#Calendario Agenda</small>
          <h3 className='auth__slogan-message' >Recupera tu contraseña</h3>
          <h2 className='auth__slogan-title' >Y sigue administrando</h2>
          <h2 className='auth__slogan-title' >Tu agenda con</h2>
          <h2 className='auth__slogan-title' >CALENDARIO</h2>
        </div>
      </div>

      <main className="auth__container">
        <div className="auth__content animate__animated animate__slideInRight">
          <h1 className='auth__title' >REESTABLECER CONTRASEÑA</h1>

          <form 
            onSubmit={ handleSubmit }
            className="form"
          >
            { (!!successMessage && isForgot) && <SuccessMessageAPI messageSuccess={ successMessage } /> }

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

            { (!!errorMessage && isForgot) && <ErrorMessageAPI messageError={ errorMessage } /> }

            <button type="submit" className="form__submit" disabled={ isLoading } >
              <span className="form__submit-text">
                { isLoading ? 'Cargando' : 'Recuperar contraseña'}
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
              <Link to='/auth/register' className='auth__link' >Registrarme</Link>
            </div>
          </div>
        </div>
      </main>
    </AuthLayout>
  )
}
