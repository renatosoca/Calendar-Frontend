import { Calendar } from 'react-big-calendar';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarLayout } from '../../layouts';
import { useCalendar } from '../../hooks';
import { localizer, getMessagesES } from '../../helpers';
import { AddEventButton, CalendarEventBox, CalendarModal, DeleteEventButton, CalendarTollbar } from '../../components';

export const CalendarPage = () => {
  const DnDCalendar = withDragAndDrop(Calendar);

  const { 
    events, lastView, formats, eventStyleGetter, handleDobleClick, handleSelect, handleSelectSlot, handleViewChange
  } = useCalendar();

  //Resize
  const onEventResize = (data) => {
    const { start, end } = data;
    console.log(start, end, data, 'resize');
  };

  //Drop
  const onEventDrop = (data) => {
    console.log(data, 'drop');
  };

  const handleShowMore = (events, date) => {
    console.log({ events, date });
  }

  return (
    <CalendarLayout>
      <DnDCalendar
        views={['month', 'week', 'day', 'agenda', 'work_week']}
        defaultView={ lastView }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        backgroundEvents={ events }
        culture='es-ES'
        localizer={ localizer }
        formats={ formats }
        style={{ height: 'calc( 100vh)', border: 'none' }}
        messages={ getMessagesES() }
        components={{
          event: CalendarEventBox,
          toolbar: CalendarTollbar,
        }}
        dayLayoutAlgorithm='no-overlap'
        //Actions
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ handleDobleClick }
        onSelectEvent={ handleSelect }
        onView={ handleViewChange }
        onSelectSlot={ handleSelectSlot }
        onShowMore={ handleShowMore }
        selectable
        /* DROP */
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        resizable
      />

      <CalendarModal />

      <AddEventButton />

      <DeleteEventButton />
    </CalendarLayout>
  )
}
