import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../store';

export const useRegister = ( formState = {}, isFormValid ) => {
  
  const dispatch = useDispatch( isFormValid, formState = {} );
  const { errorMessage, status } = useSelector( state => state.auth );

  const [ formSubmitted, setFormSubmitted ] = useState( false );
  const [ isRegister, setIsRegister ] = useState(false);

  const isLoading = status === 'checking';

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);
    setIsRegister(true);

    if ( !isFormValid ) return;
    dispatch( startRegister( formState ) );
  }

  return {
    //states
    errorMessage,
    isRegister,
    formSubmitted,
    isLoading,

    //Funcions
    handleSubmit,
  }
}