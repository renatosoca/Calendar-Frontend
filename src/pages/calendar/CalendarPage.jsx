import { useState } from 'react';
import { Calendar } from 'react-big-calendar';

import { useUiStore, useCalendarStore } from '../../hooks';
import { localizer, getMessagesES } from '../../helpers';
import { CalendarEventBox, CalendarModal } from '../../components';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export const CalendarPage = () => {
  const { events } = useCalendarStore();
  const { openModal } = useUiStore();
  const [ lastView , setLastView ] = useState(localStorage.getItem('lastView') || 'month')
  

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#367CF7',
      borderRadius: '2px',
      opacity: 0.8,
      color: 'white',
      outline: 'none',
    }

    if ( isSelected ) return { style }
  }

  const handleDobleClick = ( e ) => {
    openModal();
  }

  const handleSelect = ( e ) => {
    console.log(e);
  }

  const handleViewChange = ( e ) => {
    localStorage.setItem( 'lastView', e );
  }

  return (
    <>
      <Calendar
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
          event: CalendarEventBox
        }}
        onDoubleClickEvent={ handleDobleClick }
        onSelectEvent={ handleSelect }
        onView={ handleViewChange }
      />

      <CalendarModal />
    </>
  )
}
