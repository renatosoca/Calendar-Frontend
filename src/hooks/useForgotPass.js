import { useState } from 'react';
import { startForgotPassword } from '../store';
import { useAuth } from './useAuth';

export const useForgotPass = ( formState = {}, isFormValid, onResetForm ) => {
  
  const { dispatch, errorMessage, successMessage, status } = useAuth();

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ isForgot, setIsForgot ] = useState(false);

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsForgot(true);

    if ( !isFormValid ) return;
    dispatch( startForgotPassword( formState ) );
    setFormSubmitted(false);
    onResetForm();
  }

  return {
    //states
    errorMessage,
    successMessage,
    isForgot,
    formSubmitted,
    isLoading,

    //Funcions
    handleSubmit,
  }
}