import { useState } from 'react';
import { startLogin } from '../store';
import { useAuth } from './useAuth';

export const useLogin = ( formState = {}, isFormValid, onResetForm ) => {
  
  const { dispatch, errorMessage, status} = useAuth();

  const [ isLogin, setIsLogin ] = useState(false);
  const [ formSubmitted, setFormSubmitted ] = useState( false );

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setIsLogin( true );
    setFormSubmitted( true );

    if ( !isFormValid ) return;
    dispatch( startLogin( formState ) );
    setFormSubmitted( false );
    onResetForm();
  }

  return {
    //states
    errorMessage,
    isLogin,
    formSubmitted,
    isLoading,

    //Funcions
    handleSubmit,
  }
}