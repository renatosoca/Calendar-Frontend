import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ConfirmAccount, UnconfirmedAccount } from '../../components';
import { startConfirmAccount } from '../../store';

export const ConfirmAccountPage = () => {
  
  const { token } = useParams();
  
  const dispatch = useDispatch();
  const { errorMessage, successMessage } = useSelector( state => state.auth );

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