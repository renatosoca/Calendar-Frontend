import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Calendar } from 'react-big-calendar';

import { useUiStore, useCalendarStore } from '../../hooks';
import { localizer, getMessagesES } from '../../helpers';
import { AddEventButton, CalendarEventBox, CalendarModal, DeleteEventButton } from '../../components';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarLayout } from '../../layouts';
import { startLoadingEvents } from '../../store';


export const CalendarPage = () => {
  const dispatch = useDispatch();

  const { events, activeEventModal } = useCalendarStore();
  const { openModal } = useUiStore();

  const [ lastView , setLastView ] = useState(localStorage.getItem('lastView') || 'month')
  const [ btnDelete, setBtnDelete ] = useState(false);

  useEffect(() => {
    dispatch( startLoadingEvents() );
  }, [])

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
    setBtnDelete(false);
    openModal();
  }

  const handleSelect = ( e ) => {
    setBtnDelete(true);
    activeEventModal( e );
  }

  const handleViewChange = ( e ) => {
    localStorage.setItem( 'lastView', e );
  }

  const handleSelectSlot = (e) => {
    setBtnDelete(false);
    console.log(e, 'Prueba');
  }

  const { formats } = useMemo(
    () => ({
      formats: {
        timeGutterFormat: (date, culture, localizer) =>
          localizer.format(date, 'hh:mm a', culture),
      },
    }),
    []
  )

  return (
    <CalendarLayout>
      <Calendar
        views={['month', 'week', 'work_week', 'day', 'agenda']}
        defaultView={ lastView }
        culture='es-ES'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEventBox,
          //timeGutterHeader: () => 'Titulo',
          //toolbar: () => 'Titulo',
        }}
        onDoubleClickEvent={ handleDobleClick }
        onSelectEvent={ handleSelect }
        onView={ handleViewChange }
        onSelectSlot={ handleSelectSlot }
        backgroundEvents={ events }
        onShowMore={ handleSelectSlot }
        formats={ formats }
        //toolbar={ true }
        //tooltipAccessor={ (e) => null} //Seleccionar en cualquier lado
        //showAllEvents={ true } //Mostar todos los eventos
        //showMultiDayTimes={ true } //Mostrar todos los eventos
      />

      <CalendarModal />

      <AddEventButton />

      <DeleteEventButton active={ btnDelete } />
    </CalendarLayout>
  )
}
