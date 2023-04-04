import { useState } from 'react';
import { startRegister } from '../store';
import { useAuth } from './useAuth';

export const useRegister = ( formState = {}, isFormValid, onResetForm ) => {
  
  const { dispatch, errorMessage, successMessage, status } = useAuth();

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ isRegister, setIsRegister ] = useState(false);

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsRegister(true);

    if ( !isFormValid ) return;
    dispatch( startRegister( formState ) );
    setFormSubmitted(false);
    onResetForm();
  }

  return {
    //states
    errorMessage,
    successMessage,
    isRegister,
    formSubmitted,
    isLoading,

    //Funcions
    handleSubmit,
  }
}