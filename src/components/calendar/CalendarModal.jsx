import { useState } from "react";

import ReactModal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import { addHours } from "date-fns";
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

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            locale="es"
            selected={ formValues.start }
            onChange={ (e) => handleDateChanged( e, 'start' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            locale="es"
            minDate={ formValues.start }
            selected={ formValues.end }
            onChange={ (e) => handleDateChanged( e, 'end' ) }
            showTimeSelect
            dateFormat="Pp"
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={ handleInputChange }
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={ formValues.notes }
            onChange={ handleInputChange }
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </ReactModal>
  );
};
