
import { differenceInSeconds } from "date-fns";
import { useState } from "react";
import { useSelector } from "react-redux";

import { startCloseModal, startSavingEvent } from "../store";
import { useUi } from "./useUi";

export const useCalendarModal = ( formState = [], isFormValid ) => {

  const { dispatch, ModalCalendar, btnDelete } = useUi();
  const calendarState = useSelector((state) => state.calendar);

  const [ isFormSubmit, setIsFormSubmit ] = useState( false );

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const difference = differenceInSeconds( formState.end, formState.start );
    
    //Personalizar Mensaje
    if ( difference < 0 || difference === 0 || isNaN(difference) ) return;
    setIsFormSubmit( true );

    if ( !isFormValid ) return;

    dispatch( startSavingEvent( formState ) );
    setIsFormSubmit( false );
  }

  const handleCloseModal = () => {
    dispatch( startCloseModal() )
    setIsFormSubmit( false );
  }

  return {
    //States
    ...calendarState,
    ModalCalendar,
    btnDelete,
    isFormSubmit,

    //Methods
    handleSubmit,
    handleCloseModal,
  }
}