import { Link } from 'react-router-dom';

import { AuthLayout } from '../../layouts';
import './RegisterPage.css';

export const RegisterPage = () => {

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log('click')
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
            <div className="RegisterPage__inputs">
                <i className="fa-solid fa-user"></i>
                <input type="text" id="user" className="RegisterPage__input" placeholder="Ingrese su Usuario" />
            </div>

            <div className="RegisterPage__inputs">
                <i className="fa-sharp fa-solid fa-unlock"></i>
                <input type="password" id="password" className="RegisterPage__input" placeholder="Ingrese su Password" />
            </div>

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
