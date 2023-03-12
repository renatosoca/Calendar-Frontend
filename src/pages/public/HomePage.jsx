import { Link } from 'react-router-dom';
import { PublicLayout } from '../../layouts';

export const HomePage = () => {
  return (
    <PublicLayout>
      <main className='main'>
        <div className='main__container'>
          <div className='main__content'>
            <div className='main__left'>
              <h2 className='main__title'>Calendario</h2>
              <p className='main__info'>¡Organiza tu vida con nuestra aplicación de calendario! Mantén tus compromisos organizados, recibe recordatorios y establece alarmas para no perderte nada importante. Regístrate y descubre cómo simplificar tu día a día.</p>
            </div>

            <div className='main__right'>
              <Link to='/auth/login' className='main__explore'>
                Explorar
              </Link>
            </div>
          </div>
        </div>
      </main>
    </PublicLayout>
  )
}