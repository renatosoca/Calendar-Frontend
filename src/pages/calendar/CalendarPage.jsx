import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer, getMessagesES } from '../../helpers';

export const CalendarPage = () => {
  const events = [{
    title: 'My event',
    notes: 'Some notes',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    user: {
      _id: '123',
      name: 'Jhon Doe'
    }
  }]

  return (
    <>
      <Calendar
      culture='es-ES'
        localizer={ localizer }
        events={ events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh )' }}
        messages={ getMessagesES() }
      />
    </>
  )
}
