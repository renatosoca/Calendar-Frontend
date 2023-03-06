import ReactModal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import { addHours } from "date-fns";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";
import { useForm, useCalendarModal } from "../../hooks";
import { CgCalendar } from "react-icons/cg";
import { useEffect, useState } from "react";

registerLocale('es', es)
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};
ReactModal.setAppElement("#root");

const initialForm = {
  title: "",
  notes: "",
  start: new Date(),
  end: addHours(new Date(), 1),
};

export const CalendarModal = () => {

  //Personalizar Errores y estilos del modal
  const formValidations = {

  }

  const [ formValues, setFormValues ] = useState( initialForm );

  const {
    formState, title, notes, start, end, onInputChange, onInputChangeDate
  } = useForm( formValues, formValidations );

  const {
    ModalCalendar, activeEvent, handleSubmit, handleCloseModal 
  } = useCalendarModal( formState );

  useEffect(() => {
    if ( activeEvent !== null ) setFormValues( activeEvent );
  }, [ activeEvent ]);

  return (
    <ReactModal
      isOpen={ ModalCalendar }
      onRequestClose={ handleCloseModal }
      style={ customStyles }
      overlayClassName="Modal__fondo"
      className='Modal__container'
      closeTimeoutMS={ 200 }
    >
      <h1 className="Modal__title"> Nuevo evento </h1>

      <form onSubmit={ handleSubmit } className="Modal__form">
        <div className="Modal__group">
          <label htmlFor="date-start" className="Modal__label-date">Fecha y hora inicio</label>
          <DatePicker
            id="date-start"
            locale="es"
            maxDate={ end }
            selected={ start }
            onChange={ (e) => onInputChangeDate( e, 'start' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
            className="Modal__input"
          />
        </div>

        <div className={`Modal__group ${  'Modal__group-error' }`} >
          <label htmlFor="date-end" className="Modal__label-date">Fecha y hora fin</label>
          <DatePicker
            id="date-end"
            locale="es"
            minDate={ start }
            selected={ end }
            onChange={ (e) => onInputChangeDate( e, 'end' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
            className="Modal__input"
          />
        </div>

        <div className={`Modal__group ${ title && 'Modal__group-error' }`} >
          <input
            id="title"
            type="text"
            className="Modal__input"
            placeholder=" "
            name="title"
            autoComplete="off"
            value={ title }
            onChange={ onInputChange }
          />
          <label htmlFor="title" className="Modal__label">Titulo y notas</label>
          <span className="Modal__message">{ title && 'Titlulo requerid' }</span>
        </div>

        <div className={`Modal__group ${ notes && 'Modal__group-error' }`}>
          <textarea
            id="notes"
            type="text"
            className="Modal__input"
            placeholder=" "
            rows="2"
            name="notes"
            value={ notes }
            onChange={ onInputChange }
          />
          <label htmlFor="notes" className="Modal__label">
            Información adicional
          </label>
        </div>

        <button type="submit" className="btn ">
          <CgCalendar />
          <span> Guardar</span>
        </button>
      </form>
    </ReactModal>
  );
};
