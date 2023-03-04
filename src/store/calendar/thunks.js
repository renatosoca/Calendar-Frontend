import { calendarApi } from "../../api";
import { convertEventsToDate } from "../../helpers";
import { addNewEvent, setActiveEvent, setDeleteEvent, setLoadEvents, setLoadingEvents, setUpdateEvent } from "./calendarSlice";

export const startEventModal = ( calendarEvent ) => {
  return async ( dispatch ) => {
    dispatch( setActiveEvent( calendarEvent ) );
  }
}

export const startSavingEvent = ( calendarEvent ) => {
  return async ( dispatch, getStatus ) => {
    const { user } = getStatus().auth;
    try {
      if (calendarEvent._id) {

        await calendarApi.put( `/event/${ calendarEvent._id }`, calendarEvent );
        dispatch( setUpdateEvent( calendarEvent ) );

        return;
      } 

      const { data } = await calendarApi.post( '/event', calendarEvent );
      dispatch( addNewEvent({ ...calendarEvent, _id: data.event._id, user }) )

    } catch (error) {
      console.log(error)
    }
  }
}

export const startLoadingEvents = () => {
  return async ( dispatch ) => {
    try {
      dispatch( setLoadingEvents() );
      const { data } = await calendarApi.get( '/event' );
      const events = convertEventsToDate( data.events );
      
      dispatch( setLoadEvents( events ) );

    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeletingEvent = () => {
  return async ( dispatch, getStatus ) => {
    const { activeEvent } = getStatus().calendar;
    try {

      await calendarApi.delete( `/event/${ activeEvent._id }` );
      dispatch( setDeleteEvent() );

    } catch (error) {
      console.log(error)
    }
  }
}