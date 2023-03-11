import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AuthLayout = ({ children }) => {

  const { status } = useSelector( state => state.auth );

  return (
    <div className="auth animate__animated animate__fadeIn">
      
      { status === 'authenticated' && <Navigate to='/calendar' /> }

      { children }
      
    </div>
  );
};
