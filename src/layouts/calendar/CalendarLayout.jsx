import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const CalendarLayout = ({ children }) => {

  const { status } = useSelector( state => state.auth );

  return (
    <div className=" animate__animated animate__fadeIn">

      { status === 'authenticated' && children }
      
      { status === 'not-authenticated' && <Navigate to='/auth/login' /> }
      
    </div>
  )
}
