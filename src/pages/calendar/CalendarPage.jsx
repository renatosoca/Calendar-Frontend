import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';
import { CalendarEventBox, CalendarModal } from '../../components';
import { useState } from 'react';

export const CalendarPage = () => {
  const [ lastView , setLastView ] = useState(localStorage.getItem('lastView') || 'month')
  
  const events = [{
    title: 'My event',
    notes: 'Some notes',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    user: {
      _id: '123',
      name: 'Jhon Doe'
    }
  }];

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
    console.log( e, 'Doble' );
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
