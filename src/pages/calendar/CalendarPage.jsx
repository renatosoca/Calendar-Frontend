import { Calendar } from 'react-big-calendar';

import { useCalendar } from '../../hooks';
import { localizer, getMessagesES } from '../../helpers';
import { AddEventButton, CalendarEventBox, CalendarModal, DeleteEventButton } from '../../components';

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarLayout } from '../../layouts';
import { CalendarTollbar } from '../../components/calendar/CalendarTollbar';
import { CalendarMonthHeader } from '../../components/calendar/CalendarMonthHeader';

/* Prueba */
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

export const CalendarPage = () => {
  const DnDCalendar = withDragAndDrop(Calendar);

  const { 
    events, lastView, formats, eventStyleGetter, handleDobleClick, handleSelect, handleSelectSlot, handleViewChange
  } = useCalendar();

  const onEventResize = (data) => {
    const { start, end } = data;
    console.log(start, end, data);
  };

  const onEventDrop = (data) => {
    console.log(data);
  };

  return (
    <CalendarLayout>
      <DnDCalendar
        views={['month', 'week', 'day', 'agenda', 'work_week']} //Navegacion header
        defaultView={ 'day' }
        culture='es-ES' //Idioma
        localizer={ localizer } //Fomatos, Fecha, etc
        events={ events } //Todos los eventos
        startAccessor="start" //Tamaño de las cajas de eventos
        endAccessor="end" //Fin Hora de los eventos Listar
        style={{ height: 'calc( 100vh - 6rem)' }} //
        messages={ getMessagesES() }  //Cambiar a español
        eventPropGetter={ eventStyleGetter } //Eventos y estilos de los Events
        components={{
          event: CalendarEventBox,
          //eventWrapper: () => 'titulo', //Contenedor de los eventos
          //timeSlotWrapper: () => 'titulo', //Hora izquierda
          //timeGutterHeader: () => 'Titulo', //Cabeza entre hota y fecha
          toolbar: CalendarTollbar, //Header Calendar
        }}
        onDoubleClickEvent={ handleDobleClick }
        onSelectEvent={ handleSelect }  //Al seleccionar un evento
        onView={ handleViewChange } //Al cambiar de una vista
        onSelectSlot={ handleSelectSlot } //En prueba
        backgroundEvents={ events } //Estilos de las cajas de los eventos
        onShowMore={ handleSelectSlot } //en prueba
        formats={ formats }
        //toolbar={ true } //Hacer visible o no el header
        //tooltipAccessor={ (e) => null} //Seleccionar en cualquier lado
        //showAllEvents={ false } //Mostar todos los eventos
        //showMultiDayTimes={ true } //Mostrar todos los eventos
        dayLayoutAlgorithm='no-overlap'
        //selectable
        resourceTitleAccessor={ () => 'titulo'}

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
