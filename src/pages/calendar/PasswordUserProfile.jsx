import { useEffect, useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { HeaderUserProfile } from '../../components';
import { initialFormUserPassword, validationsFormUserPassword } from '../../data';
import { useAuth, useForm } from '../../hooks';
import { CalendarLayout } from '../../layouts';
import { startUserResetPassword } from '../../store';

export const PasswordUserProfile = () => {
  const { loading, dispatch } = useAuth();
  const [ isFormSubmit, setIsFormSubmit ] = useState( false );

  const {
    formState, oldPassword, newPassword, isFormValid, oldPasswordValid, newPasswordValid, onInputChange, onResetForm
  } = useForm( initialFormUserPassword, validationsFormUserPassword );

  useEffect(() => {
    if ( loading === '') onResetForm();
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmit( true );
    
    if (!isFormValid) return;
    setIsFormSubmit( false );
    dispatch( startUserResetPassword( formState ) );
  }

  return (
    <CalendarLayout>
      <div className='profile'>
        <HeaderUserProfile />

        <main className='profile__main'>
          <div className='profile__container'>
            <div className='profile__content'>
              <h2 className='profile__title'>Reestablecer contraseña</h2>
              <p className='profile__description'>Reestablece tu contraseña en unos simples pasos.</p>
              <small className='profile__notification'>Tu nueva contraseña debe contener un mínimo de 8 caracteres, una mayuscula, una minuscula y un caracter especial</small>
            </div>

            <form className='profile__form' onSubmit={ handleSubmit }>
              <div className='form__content'>
                <div className={`form__group ${ isFormSubmit && oldPasswordValid ? 'form__group-error' : '' }`} >
                  <input
                    className="form__input"
                    id="oldPassword"
                    type="password"
                    placeholder=" "
                    name="oldPassword"
                    value={ oldPassword }
                    onChange={ onInputChange }
                    autoComplete="off"
                  />
                  <label htmlFor="oldPassword" className="form__label">Nueva contraseña</label>
                </div>

                <span className="form__span">{ isFormSubmit && oldPasswordValid }</span>
              </div>

              <div className='form__content'>
                <div className={`form__group ${ isFormSubmit && newPasswordValid ? 'form__group-error' : '' }`} >
                  <input
                    className="form__input"
                    id="newPassword"
                    type="password"
                    placeholder=" "
                    name="newPassword"
                    value={ newPassword }
                    onChange={ onInputChange }
                    autoComplete="off"
                  />
                  <label htmlFor="newPassword" className="form__label">Nueva contraseña</label>
                </div>

                <span className="form__span">{ isFormSubmit && newPasswordValid }</span>
              </div>

              <button type="submit" className="form__submit" disabled={ false } >
                <span className="form__submit-text">
                  { loading === 'loading' ? 'Reestableciendo' : 'Reestablecer contraseña'}
                </span>

                <span className={`form__spinner ${ loading === 'loading' ? 'form__spinner-active' : ''}`}>
                  <VscLoading className='form__loading' />
                </span>
              </button>
            </form>

            <Link
              to="/calendar/profile"
              className='profile__footer'
            >
              Actualizar perfil
            </Link>
          </div>
        </main>
      </div>
    </CalendarLayout>
  )
}
