
import { differenceInSeconds } from "date-fns";
import { useDispatch, useSelector } from "react-redux";

import { startCloseModal, startSavingEvent } from "../store";

export const useCalendarModal = ( formState = [] ) => {

  const dispatch = useDispatch();
  const { ModalCalendar } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const difference = differenceInSeconds( formState.end, formState.start );
    
    //Personalizar Mensaje
    if ( difference < 0 || difference === 0 || isNaN(difference) ) return;

    dispatch( startSavingEvent( formState ) );
    dispatch( startCloseModal() );
  }

  const handleCloseModal = () => {
    dispatch( startCloseModal() )
  }

  return {
    //States
    ModalCalendar,
    activeEvent,

    //Methods
    handleSubmit,
    handleCloseModal,
  }
}