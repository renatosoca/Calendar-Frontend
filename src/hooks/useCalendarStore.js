import { useDispatch, useSelector } from 'react-redux';

import { addNewEvent, setActiveEvent, setDeleteEvent, setUpdateEvent } from '../store';

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );

  const activeEventModal = ( calendarEvent ) => {
    dispatch( setActiveEvent( calendarEvent ) );
  }

  const startSavingEvent = async ( calendarEvent ) => {
    if (calendarEvent._id) {
      dispatch( setUpdateEvent( calendarEvent ) );
    } else {
      dispatch( addNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }
  }

  const startDeletingEvent = () => {
    dispatch( setDeleteEvent( activeEvent ) );
  }

  return {
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    activeEventModal,
    startSavingEvent,
    startDeletingEvent,
  }
}