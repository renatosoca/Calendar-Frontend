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
        localizer.format(date, 'hh:mm aaaa', culture), //Day
      dateFormat: (date, culture, localizer) =>
        localizer.format(date, 'dd', culture), //Calendar Body: 01, 02, 03 ...
      //dayFormat: (date, culture, localizer) =>
      //  localizer.format(date, 'DDDD MM/dd', culture),  //Week: 01 lun, 02 mar, 03 mier ...
      eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
        localizer.format(start, 'hh:mm aaa', culture) + ' - ' + localizer.format(end, 'hh:mm aaa', culture), //Event: 10:00 - 11:00
      monthHeaderFormat: (date, culture, localizer) =>
        localizer.format(date, `MMMM yyyy`, culture), //Marzo 2023
    },
  }), []);

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#0E2237',
      borderRadius: '2px',
      color: '#5090D3',
      outline: 'none',
    }

    if ( isSelected ) return { style }
  }

  const handleSelect = ( e ) => {
    dispatch( startEventActiveModal( e ) );
  }

  const handleDobleClick = ( e ) => {
    dispatch( startOpenModal() );
  }

  const handleViewChange = ( e ) => {
    localStorage.setItem( 'lastView', e );
  }

  const handleSelectSlot = ({ start, end}) => {
    dispatch( startEventActiveModal({ start, end, title: '', notes: ''}) );
    dispatch( startOpenModal() );
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