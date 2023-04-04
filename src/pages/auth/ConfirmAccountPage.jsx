import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ConfirmAccount, UnconfirmedAccount } from '../../components';
import { useAuth } from '../../hooks';
import { startConfirmAccount } from '../../store';

export const ConfirmAccountPage = () => {
  
  const { token } = useParams();
  const { errorMessage, successMessage, dispatch } = useAuth();

  useEffect(() => {
    dispatch( startConfirmAccount({ token }) );
  }, [])

  return (
    <div className='confirm'>
      { !!successMessage && <ConfirmAccount /> }
      
      { !!errorMessage && <UnconfirmedAccount MessageError={ errorMessage } /> }
    </div>
  )
}