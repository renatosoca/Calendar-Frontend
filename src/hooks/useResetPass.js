import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startResetPassword } from '../store';

export const useResetPass = ( payload = {}, isFormValid, onResetForm ) => {
  
  const { dispatch, errorMessage, successMessage, status } = useAuth();

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ isResetPass, setIsResetPass ] = useState(false);

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsResetPass(true);

    if ( !isFormValid ) return;
    dispatch( startResetPassword( payload ) );
    setFormSubmitted(false);
    onResetForm();
  }

  return {
    //states
    errorMessage,
    successMessage,
    isResetPass,
    formSubmitted,
    isLoading,

    //Funcions
    handleSubmit,
  }
}