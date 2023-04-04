import { calendarApi } from "../../api";
import { convertEventsToDate } from "../../helpers";
import { startCloseModal, startHiddenBtnDelete } from "../ui/thunks";
import { onAddNewEvent, onActiveEvent, onDeleteEvent, onLoadEvents, onLoadingEvents, onUpdateEvent, onLoading, onChangeMsgEvent } from "./calendarSlice";

export const startEventActiveModal = ( calendarEvent ) => {
  return async ( dispatch ) => {
    dispatch( onActiveEvent( calendarEvent ) );
  }
}

export const startSavingEvent = ( calendarEvent ) => {
  return async ( dispatch, getStatus ) => {
    const { user } = getStatus().auth;
    dispatch( onLoading('loading') );

    try {
      if (calendarEvent._id) {

        const { data } = await calendarApi.put( `/event/${ calendarEvent._id }`, calendarEvent );
        dispatch( onUpdateEvent( calendarEvent ) );
        dispatch( onChangeMsgEvent({ msgEvent: 'Evento editado correctamente', ok: true }) );

        return;
      } 

      const { data } = await calendarApi.post( '/event', calendarEvent );
      dispatch( onAddNewEvent({ ...calendarEvent, _id: data.event._id, user }) );
      dispatch( onChangeMsgEvent({ msgEvent: 'Evento creado correctamente', ok: true }) );

    } catch (error) {
      dispatch( onChangeMsgEvent({ msgEvent: error.response.data.msg, ok: false }) );
    } finally {
      dispatch( startCloseModal() );
      setTimeout(() => {
        dispatch( onChangeMsgEvent({ msgEvent: '', ok: ''}) );
      }, 2500);
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
      dispatch( onChangeMsgEvent({ msgEvent: error.response.data.msg, ok: false }) );
    } finally {
      dispatch( onChangeMsgEvent({ msgEvent: '', ok: ''}) );
      setTimeout(() => {
        dispatch( onChangeMsgEvent({ msgEvent: '', ok: ''}) );
      }, 2500);
    }
  }
}

export const startDeletingEvent = () => {
  return async ( dispatch, getStatus ) => {
    const { activeEvent } = getStatus().calendar;
    try {
      dispatch( onLoading('loadingDelete') );

      await calendarApi.delete( `/event/${ activeEvent._id }` );
      dispatch( onDeleteEvent() );
      dispatch( startHiddenBtnDelete() );
      dispatch( onChangeMsgEvent({ msgEvent: 'Evento eliminado correctamente', ok: true }) );

    } catch (error) {
      dispatch( onChangeMsgEvent({ msgEvent: error.response.data.msg, ok: false }) );
    } finally {
      setTimeout(() => {
        dispatch( onChangeMsgEvent({ msgEvent: '', ok: ''}) );
      }, 2500);
    }
  }
}