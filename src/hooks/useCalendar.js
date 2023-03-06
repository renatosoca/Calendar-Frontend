import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEventActiveModal, startLoadingEvents, startOpenModal } from "../store";

export const useCalendar = () => {
  
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  const [ lastView , setLastView ] = useState(localStorage.getItem('lastView') || 'month')

  useEffect(() => {
    dispatch( startLoadingEvents() );
  }, []);

  const { formats } = useMemo( () => ({
    formats: {
      timeGutterFormat: (date, culture, localizer) =>
        localizer.format(date, 'hh:mm a', culture),
    },
  }), []);

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '2px',
      opacity: 0.7,
      color: 'white',
      outline: 'none',
    }

    if ( isSelected ) return { style }
  }

  const handleDobleClick = ( e ) => {
    dispatch( startOpenModal() );
  }

  const handleSelect = ( e ) => {
    dispatch( startEventActiveModal( e ) );
  }

  const handleViewChange = ( e ) => {
    localStorage.setItem( 'lastView', e );
  }

  const handleSelectSlot = (e) => {
    console.log(e, 'Prueba');
  }

  return {
    //States
    events,
    activeEvent,
    lastView,
    //Formats
    formats,

    //Methods
    eventStyleGetter,
    handleDobleClick,
    handleSelect,
    handleViewChange,
    handleSelectSlot,
  }
}