import { Calendar } from 'react-big-calendar';

import { useCalendar } from '../../hooks';
import { localizer, getMessagesES } from '../../helpers';
import { AddEventButton, CalendarEventBox, CalendarModal, DeleteEventButton } from '../../components';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarLayout } from '../../layouts';


export const CalendarPage = () => {

  const { 
    events, lastView, formats, eventStyleGetter, handleDobleClick, handleSelect, handleSelectSlot, handleViewChange
  } = useCalendar();

  return (
    <CalendarLayout>
      <Calendar
        views={['month', 'week', 'day', 'agenda', 'work_week']}
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

      <DeleteEventButton />
    </CalendarLayout>
  )
}
