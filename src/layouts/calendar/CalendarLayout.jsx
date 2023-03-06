import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { CgMenuGridR } from 'react-icons/cg';

export const CalendarLayout = ({ children }) => {

  const { status, user } = useSelector( state => state.auth );
  const { name } = user;

  return (
    <div className="CalendarLayout animate__animated animate__fadeIn">
      <header className='CalendarLayout__header'>
        <div className='CalendarLayout__left'>
          <h1 className='CalendarLayout__title'>Calendario</h1>
        </div>

        <div className='CalendarLayout__rigth'>
          <div className='CalendarLayout__avatar'>
            { name }
          </div>

          <button className='CalendarLayout__menu'>
            <CgMenuGridR />
          </button>
        </div>
      </header>

      { status === 'authenticated' && children }
      
      { status === 'not-authenticated' && <Navigate to='/auth/login' /> }
      
    </div>
  )
}
