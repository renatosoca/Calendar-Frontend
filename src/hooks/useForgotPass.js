import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startForgotPassword } from '../store';

export const useForgotPass = ( formState = {}, isFormValid, onResetForm ) => {
  
  const dispatch = useDispatch();
  const { errorMessage, successMessage, status } = useSelector( state => state.auth );

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