import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../store';

export const useLogin = ( formState = {}, isFormValid, onResetForm ) => {
  
  const dispatch = useDispatch();
  const { errorMessage, status } = useSelector( state => state.auth );

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