import { useState } from 'react';
import { VscLoading } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { HeaderUserProfile } from '../../components';
import { validationsFormUserProfile } from '../../data';
import { useAuth, useForm } from '../../hooks';
import { CalendarLayout } from '../../layouts';
import { startUpdateUserProfile } from '../../store';

export const ProfileUserPage = () => {
  const { user, loading, dispatch } = useAuth();
  const [ formValues, setFormValues ] = useState( user );

  const { formState, name, lastname, email, isFormValid, nameValid, lastnameValid, emailValid, onInputChange } = useForm( formValues, validationsFormUserProfile );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;
    dispatch( startUpdateUserProfile( formState ) );
  }

  return (
    <CalendarLayout>
      <div className='profile'>
        <HeaderUserProfile />

        <main className='profile__main'>
          <div className='profile__container'>
            <div className='profile__content'>
              <h2 className='profile__title'>Actualizar Perfil</h2>
              <p className='profile__description'>Ingrese sus datos </p>
            </div>

            <form className='profile__form' onSubmit={ handleSubmit }>
              <div className='form__content'>
                <div className={`form__group ${ nameValid ? 'form__group-error' : '' }`} >
                  <input
                    className="form__input"
                    id="name"
                    type="text"
                    placeholder=" "
                    name="name"
                    value={ name }
                    onChange={ onInputChange }
                    autoComplete="off"
                  />
                  <label htmlFor="name" className="form__label">Nombre</label>
                </div>

                <span className="form__span">{ nameValid }</span>
              </div>

              <div className='form__content'>
                <div className={`form__group ${ lastnameValid ? 'form__group-error' : '' }`} >
                  <input
                    className="form__input"
                    id="lastname"
                    type="text"
                    placeholder=" "
                    name="lastname"
                    value={ lastname }
                    onChange={ onInputChange }
                    autoComplete="off"
                  />
                  <label htmlFor="lastname" className="form__label">Apellido</label>
                </div>

                <span className="form__span">{ lastnameValid }</span>
              </div>

              <div className='form__content'>
                <div className={`form__group ${ emailValid ? 'form__group-error' : '' }`} >
                  <input
                    className="form__input"
                    id="email"
                    type="email"
                    placeholder=" "
                    name="email"
                    value={ email }
                    onChange={ onInputChange }
                    autoComplete="off"
                  />
                  <label htmlFor="email" className="form__label">Email</label>
                </div>

                <span className="form__span">{ emailValid }</span>
              </div>

              <button 
                type="submit" 
                className="form__submit" 
                disabled={ loading === 'loading' } 
              >
                <span className="form__submit-text">
                  { loading === 'loading' ? 'Actualizando' : 'Guardar cambios'}
                </span>

                <span className={`form__spinner ${ loading === 'loading' ? 'form__spinner-active' : ''}`}>
                  <VscLoading className='form__loading' />
                </span>
              </button>
            </form>

            <Link
              to="/calendar/reset-password"
              className='profile__footer'
            >
              Actualizar contraseña
            </Link>
          </div>
        </main>
      </div>
    </CalendarLayout>
  )
}
