import { Link } from 'react-router-dom';

import { AuthLayout } from '../../layouts';
import './LoginPage.css';

export const LoginPage = () => {

  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log('click')
  }

  return (
   <AuthLayout >
      <div className="LoginPage">
        <div className="LoginPage__container animate__animated animate__slideInLeft">
          <h1 className='LoginPage__title' >Login</h1>
          <form
            onSubmit={ handleSubmit }
            className="LoginPage__form"
          >
            <div className="LoginPage__inputs">
                <input type="text" id="user" className="LoginPage__input" placeholder="Ingrese su Usuario" />
            </div>

            <div className="LoginPage__inputs">
                <input type="password" id="password" className="LoginPage__input" placeholder="Ingrese su Password" />
            </div>
            
            <input type="submit" className="btn LoginPage_submit" id="enviar_LoginPage" value="Iniciar sesión" />
          </form>
          <span>
            ¿No tienes una Cuenta? <Link to='/auth/register' >Registrate</Link> 
          </span>
        </div>
      </div>

      <div className="LoginPage__info">
        <div className='LoginPage__content' >
          <small className='' >#Administra tu Agenda</small>
          <h4 className='' >Ingresa y Gestiona tu Agenda</h4>
          <h3 className='' >Administra toda tu agenda</h3>
          <h2 className='' >Con nosotros</h2>
        </div>
      </div>
   </AuthLayout>
  )
}
