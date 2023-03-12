
import { differenceInSeconds } from "date-fns";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCloseModal, startSavingEvent } from "../store";

export const useCalendarModal = ( formState = [], isFormValid ) => {

  const dispatch = useDispatch();
  const { ModalCalendar } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  const [ isFormSubmit, setIsFormSubmit ] = useState( false );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const difference = differenceInSeconds( formState.end, formState.start );
    
    //Personalizar Mensaje
    if ( difference < 0 || difference === 0 || isNaN(difference) ) return;
    setIsFormSubmit( true );

    if ( !isFormValid ) return;

    dispatch( startSavingEvent( formState ) );
    dispatch( startCloseModal() );
    setIsFormSubmit( false );
  }

  const handleCloseModal = () => {
    dispatch( startCloseModal() )
    setIsFormSubmit( false );
  }

  return {
    //States
    ModalCalendar,
    activeEvent,
    isFormSubmit,

    //Methods
    handleSubmit,
    handleCloseModal,
  }
}