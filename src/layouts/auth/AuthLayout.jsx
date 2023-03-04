import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './AuthLayout.css';

export const AuthLayout = ({ children }) => {

  const { status } = useSelector( state => state.auth );

  return (
    <div className="AuthLayout animate__animated animate__fadeIn">
      
      { status === 'authenticated' && <Navigate to='/calendar' /> }

      { children }
      
    </div>
  );
};
