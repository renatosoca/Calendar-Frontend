import { useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { AiOutlineCaretLeft, AiOutlineCaretRight, AiOutlineSetting } from 'react-icons/ai';
import { CgLogOut } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../store';

export const CalendarTollbar = ( props ) => {
  const { localizer: { messages },
  label,
  views,
  view,
  onNavigate,
  onView, 
  } = props;
  
  const newViews = views.map( option => ({ label: option, value: option }));

  const dispatch = useDispatch();
  const { user } = useSelector( state => state.auth );
  
  const [selectedOption, setSelectedOption] = useState(views);
  const [showOptions, setShowOptions] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    onView(option.value);
    setShowOptions(false);
  };

  const handleShowOptions = () => {
    setShowSettings(false);
    setShowProfile(false);
    //TOGGLE
    setShowOptions(!showOptions);
  }

  const handleMenuProfile = () => {
    setShowSettings(false);
    setShowOptions(false);
    //TOGGLE
    setShowProfile(!showProfile);
  }

  const handleMenuSettings = () => {
    setShowProfile(false);
    setShowOptions(false);
    //TOGGLE
    setShowSettings(!showSettings);
  }

  const handleClickLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <>
      <header className='tollbar'>
        <div className='tollbar__left'>
          <h1 className='tollbar__title'>Calendario</h1>

          <div className='tollbar__nav'>
            <button
              className='tollbar__button tollbar__button-today'
              type="button" 
              onClick={() => onNavigate('TODAY')}
            >
              {messages.today}
            </button>

            <div className='tollbar__arrows'>
              <button 
                className='tollbar__arrow tollbar__arrow-left'
                type="button" 
                onClick={() => onNavigate('PREV')}
                >
                <AiOutlineCaretLeft />
              </button>

              <button 
                className='tollbar__arrow tollbar__arrow-right'
                type="button" 
                onClick={() => onNavigate('NEXT')}
                >
                <AiOutlineCaretRight />
              </button>
            </div>
          </div>
          
          <div className='tollbar__center'>
            {label}
          </div>
        </div>

        <div className='tollbar__rigth'>
          <div className='tollbar__content'>
            <div 
              className="tollbar__select" 
              onClick={ handleShowOptions }
            >
              {messages[view]}
            </div>
            {showOptions && (
              <div className="tollbar__option">
                {newViews.map((option) => (
                  <div
                    key={option.value}
                    className={`tollbar__values ${selectedOption.value === option.value ? 'tollbar__values-active' : ''}`}
                    onClick={() => handleOptionChange(option)}
                  >
                    <span>{messages[option.label]}</span>
                    <span>{(messages[option.label]).substring(0,1)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className='tollbar__menus'>
            <div className='tollbar__menus-relative'>
              <div className='tollbar__menu'>
                <button 
                  className='tollbar__menu-icon'
                  onClick={ handleMenuProfile }
                >
                  <RxAvatar />
                </button>
              </div>
              
              <div className={`tollbar__profile ${ (showProfile) ? '': 'hidden' }`}>
                <div className='tollbar__profile--sign'>
                  <small className='tollbar__profile-top'>Ingresaste como</small>
                  <h4 className='tollbar__profile-user'>{ user.name }</h4>
                </div>
              </div>
            </div>

            <div className='tollbar__menus-relative'>
              <div className='tollbar__menu'>
                <button
                  className='tollbar__menu-icon'
                  onClick={ handleMenuSettings }
                >
                  <AiOutlineSetting />
                </button>
              </div>

              <div className={`tollbar__profile ${ (showSettings) ? '': 'hidden' }`}>
                  <div className='tollbar__profile--options'>
                    <button className='tollbar__profile--option'>
                      <span>Tu perfil</span>
                    </button>

                    <button className='tollbar__profile--option'>
                      <span>En construcción</span>
                    </button>

                    <button className='tollbar__profile--option'>
                      <span>En construcción</span>
                    </button>
                  </div>

                  <div className='tollbar__profile-content'>
                    <button
                    onClick={ handleClickLogout }
                      className='tollbar__profile--logout'
                    >
                      <CgLogOut />
                      <span>Salir</span>
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
