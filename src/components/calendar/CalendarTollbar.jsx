import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';

export const CalendarTollbar = ( props ) => {
  const { localizer: { messages },
  label,
  views,
  view,
  onNavigate,
  onView, 
  } = props;

  const [selectedOption, setSelectedOption] = useState(views);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onView(option.value);
    setShowOptions(false);
  };
  const newViews = views.map( option => ({ label: option, value: option }))

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

            <div className='calendar__container-button'>
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
          </div>
          
          <div className='calendar__center'>
            {label}
          </div>
        </div>

        <div className='calendar__rigth'>
          <div className='calendar__content'>
            <div 
              className="calendar__select" 
              onClick={() => setShowOptions(!showOptions)}
            >
              {messages[view]}
            </div>
            {showOptions && (
              <div className="calendar__option">
                {newViews.map((option) => (
                  <div
                    key={option.value}
                    className={`calendar__values ${selectedOption.value === option.value ? 'calendar__values-active' : ''}`}
                    onClick={() => handleOptionChange(option)}
                  >
                    <span>{messages[option.label]}</span>
                    <span>{(messages[option.label]).substring(0,1)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

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
