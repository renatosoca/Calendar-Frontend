import ReactModal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import { addHours } from "date-fns";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";
import { useForm, useCalendarModal } from "../../hooks";
import { CgCalendar } from "react-icons/cg";
import { useEffect, useState } from "react";

registerLocale('es', es);
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
    title: [(title) => title.length > 0, "El titulo es requerido"]
  }

  const [ formValues, setFormValues ] = useState( initialForm );

  const {
    formState, title, notes, start, end, onInputChange, onInputChangeDate, isFormValid, titleValid, startValid, endValid
  } = useForm( formValues, formValidations );

  const {
    ModalCalendar, activeEvent, isFormSubmit, handleSubmit, handleCloseModal 
  } = useCalendarModal( formState, isFormValid );

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

      <form 
        onSubmit={ handleSubmit } 
        className="Modal__form"
      >
        <div>
          <label htmlFor="date-start" className="Modal__label">Fecha y hora inicio</label>
          <div className="Modal__group">
            <DatePicker
              id="date-start"
              locale="es"
              maxDate={ end }
              selected={ start }
              onChange={ (e) => onInputChangeDate( e, 'start' ) }
              showTimeSelect
              dateFormat="Pp"
              placeholderText=" "
              timeCaption="Hora"
              className="Modal__input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="date-end" className="Modal__label">Fecha y hora fin</label>
          <div className="Modal__group">
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
        </div>

        <div className="form__content">
          <div className='form__group' >
            <input
              id="title"
              type="text"
              className="form__input"
              placeholder=" "
              name="title"
              autoComplete="off"
              value={ title }
              onChange={ onInputChange }
            />
            <label htmlFor="title" className="form__label">Titulo y notas</label>
          </div>
          
          <span className="form__span">{ isFormSubmit && titleValid }</span>
        </div>

        <div className="form__group">
          <textarea
            id="notes"
            type="text"
            className="form__input"
            placeholder=" "
            rows="2"
            name="notes"
            value={ notes }
            onChange={ onInputChange }
          />
          <label htmlFor="notes" className="form__label">
            Información adicional
          </label>
        </div>

        <button type="submit" className="form__submit">
          <span> Guardar</span>
        </button>
      </form>
    </ReactModal>
  );
};
