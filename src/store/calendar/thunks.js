import { calendarApi } from "../../api";
import { convertEventsToDate } from "../../helpers";
import { onAddNewEvent, onActiveEvent, onDeleteEvent, onLoadEvents, onLoadingEvents, onUpdateEvent } from "./calendarSlice";

export const startEventActiveModal = ( calendarEvent ) => {
  return async ( dispatch ) => {
    dispatch( onActiveEvent( calendarEvent ) );
  }
}

export const startSavingEvent = ( calendarEvent ) => {
  return async ( dispatch, getStatus ) => {
    const { user } = getStatus().auth;
    try {
      if (calendarEvent._id) {

        await calendarApi.put( `/event/${ calendarEvent._id }`, calendarEvent );
        dispatch( onUpdateEvent( calendarEvent ) );

        return;
      } 

      const { data } = await calendarApi.post( '/event', calendarEvent );
      dispatch( onAddNewEvent({ ...calendarEvent, _id: data.event._id, user }) )

    } catch (error) {
      console.log(error)
    }
  }
}

export const startLoadingEvents = () => {
  return async ( dispatch ) => {
    try {
      dispatch( onLoadingEvents() );
      const { data } = await calendarApi.get( '/event' );
      const events = convertEventsToDate( data.events );
      
      dispatch( onLoadEvents( events ) );

    } catch (error) {
      console.log(error.response)
    }
  }
}

export const startDeletingEvent = () => {
  return async ( dispatch, getStatus ) => {
    const { activeEvent } = getStatus().calendar;
    try {

      await calendarApi.delete( `/event/${ activeEvent._id }` );
      dispatch( onDeleteEvent() );

    } catch (error) {
      console.log(error)
    }
  }
}