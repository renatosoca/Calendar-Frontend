import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ToastNotification } from '../components';

export const CalendarLayout = ({ children }) => {

  const { status, user } = useSelector( state => state.auth );
  const { name } = user;

  return (
    <div className="calendar animate__animated animate__fadeIn">
      <ToastNotification />

      { status === 'authenticated' && children }
      
      { status === 'not-authenticated' && <Navigate to='/auth/login' /> }
      
      { status === 'user-logout' && <Navigate to='/' /> }
      
    </div>
  )
}
