import { CgMenuGridR } from 'react-icons/cg';

import Select from 'react-select';

export const CalendarTollbar = ( props ) => {
  const { localizer: { messages },
  label,
  views,
  view,
  onNavigate,
  onView, 
  } = props;

  let Values = [];
  for (const option of views) {
    Values = [...Values, { label: option, value: option }]
  }

  return (
    <>
      <header className='calendar'>
        <div className='calendar__left'>
          <h1 className='calendar__title'>Calendario</h1>

          <div className='calendar__nav'>
            <button
              className='calendar__button calendar__button-today'
              type="button" 
              onClick={() => onNavigate('TODAY')}
            >
              {messages.today}
            </button>

            <button 
              className='calendar__button calendar__button-arrows'
              type="button" 
              onClick={() => onNavigate('PREV')}
              >
              {messages.previous}
            </button>

            <button 
              className='calendar__button calendar__button-arrows'
              type="button" 
              onClick={() => onNavigate('NEXT')}
              >
              {messages.next}
            </button>
          </div>
          
          <div className='calendar__center'>
            {label}
          </div>
        </div>

        <div className='calendar__rigth'>
          {(views.length > 1) && (
            <select
              value={view}
              onChange={(e) => onView(e.target.value)}
              className="calendar__select"
            >
              {views.map((name) => (
                <option
                  key={name}
                  value={name}
                  className={`calendar__option ${view === name ? 'calendar__option-active' : ''}`}
                >
                  {messages[name]}
                </option>
              ))}
            </select>
          )}

          <div className='calendar__menu'>
            <button className='calendar__options'>
              <CgMenuGridR />
            </button>

            <div className='calendar__avatar'>
              Prueba
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
