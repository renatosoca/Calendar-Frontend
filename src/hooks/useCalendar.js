import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCloseModalEvent, startDeletingEvent, startEventActiveModal, startLoadingEvents, startModalEvent, startOpenModal } from "../store";

export const useCalendar = () => {
  
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  const [ lastView , setLastView ] = useState(localStorage.getItem('lastView') || 'month');

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
      backgroundColor: '#C0E8F9',
      borderRadius: '0',
      color: '#1D1D1D',
      outline: 'none',
    }

    if ( isSelected ) {
      return { style };
    }
  }

  const handleSelect = ( e ) => {
    dispatch( startEventActiveModal( e ) );
    dispatch( startModalEvent() );
  }

  const handleDobleClick = ( e ) => {
    dispatch( startOpenModal() );
    dispatch( startCloseModalEvent() );
  }

  const handleViewChange = ( e ) => {
    localStorage.setItem( 'lastView', e );
    dispatch( startCloseModalEvent() );
  }

  const handleSelectSlot = ({ start, end}) => {
    dispatch( startEventActiveModal({ start, end, title: '', notes: ''}) );
    dispatch( startOpenModal() );
    dispatch( startCloseModalEvent() );
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