import { useState } from "react";

import ReactModal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import { addHours, differenceInSeconds } from "date-fns";
import es from 'date-fns/locale/es';

import "react-datepicker/dist/react-datepicker.css";
import "./css/CalendarModal.css";

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

export const CalendarModal = () => {

  const [isOpen, setisOpen] = useState(true);
  const [ formValid, setFormValid ] = useState({
    date: false,
    title: false,
    note: false
  });
  const [ formValues, setFormValues ] = useState({
    title: "Evento",
    notes: "Eventos",
    start: new Date(),
    end: addHours(new Date(), 2),
  })

  const closeModal = () => {
    setisOpen(false);
  };

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  const handleDateChanged = ( e, changing ) => {
    setFormValues({
      ...formValues,
      [changing]: e
    });
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    
    const difference = differenceInSeconds( formValues.end, formValues.start );
    
    if ( difference < 0 || difference === 0 || isNaN(difference) ) return setFormValid({date: true});
    if ( formValues.title.length === 0 ) return setFormValid({title: true});
    if ( formValues.title.length === 0 ) return setFormValid({note: true});
    
    setFormValid({})
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="Modal__fondo"
      className='Modal__container'
      closeTimeoutMS={200}
    >
      <h1 className="Modal__title"> Nuevo evento </h1>
      <form onSubmit={ handleSubmit } className="Modal__form">
        <div className="Modal__group">
          <label htmlFor="date-start" className="Modal__label-date">Fecha y hora inicio</label>
          <DatePicker
            id="date-start"
            locale="es"
            maxDate={ formValues.end }
            selected={ formValues.start }
            onChange={ (e) => handleDateChanged( e, 'start' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
            className="Modal__input"
          />
        </div>

        <div className={`Modal__group ${ formValid.date && 'Modal__group-error' }`} >
          <label htmlFor="date-end" className="Modal__label-date">Fecha y hora fin</label>
          <DatePicker
            id="date-end"
            locale="es"
            minDate={ formValues.start }
            selected={ formValues.end }
            onChange={ (e) => handleDateChanged( e, 'end' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
            className="Modal__input"
          />
        </div>

        <div className={`Modal__group ${ formValid.title && 'Modal__group-error' }`} >
          <input
            id="title"
            type="text"
            className="Modal__input"
            placeholder=" "
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={ handleInputChange }
          />
          <label htmlFor="title" className="Modal__label">Titulo y notas</label>
        </div>

        <div className={`Modal__group ${ formValid.note && 'Modal__group-error' }`}>
          <textarea
            id="notes"
            type="text"
            className="Modal__input"
            placeholder=" "
            rows="2"
            name="notes"
            value={ formValues.notes }
            onChange={ handleInputChange }
          >
          </textarea>
          <label htmlFor="notes" className="Modal__label">
            Información adicional
          </label>
        </div>

        <button type="submit" className="btn ">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </ReactModal>
  );
};
