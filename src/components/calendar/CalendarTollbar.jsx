

export const CalendarTollbar = (e) => {
  console.log(e)
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button">Hoy</button>
        <button type="button">&lt;</button>
        <button type="button">&gt;</button>
      </span>
      <span className="rbc-toolbar-label">sábado mar 04</span>
      <span className="rbc-btn-group">
        <button type="button" className="">
          Mes
        </button>
        <button type="button" className="rbc-active">
          Semana
        </button>
        <button type="button" className="rbc-active">
          Día
        </button>
        <button type="button" className="">
          Agenda
        </button>
        <button type="button" className="">
          4 días
        </button>
      </span>
    </div>
  );
};
