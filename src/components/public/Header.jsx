import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

export const Header = () => {

  const [ isNavbar, setIsNavbar ] = useState(false);

  return (
    <header className='header'>
      <div className="header__container">
        <div className='header__left'>
          <div className='header__logo'>
            <h1>Calendario</h1>
          </div>

          <div className='header__barra'>
          </div>
        </div>  {/* END LEFT */}

        <div className='header__right'>
          <nav className={`header__nav ${ isNavbar?'header__nav-active':'' }`}>
            <div className={`header__content ${ isNavbar?'header__content-active':'' }`}>
              <div className='header__content-header'>
                <div className='header__content-title'>
                  Navegación
                </div>

                <button
                  onClick={ () => setIsNavbar(false) }
                  className='header__content-close'
                >
                  <RiCloseFill />
                </button>
              </div>  {/* END CONTENT HEADER */}

              <ul className='header__list'>
                <li>
                  <NavLink 
                    to='/' 
                    className={({isActive}) => `header__link ${isActive? 'header__link-active' : ''}`}
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink 
                    to='/about' 
                    className={({isActive}) => `header__link ${isActive? 'header__link-active' : ''}`}
                  >
                    Nosotros
                  </NavLink>
                </li>
              </ul> {/* END LINKS */}
            </div>  {/* END CONTENT NAVBAR */}
          </nav>

          <div className='header__menus'>
            <Link
              to='/auth/login'
              className='header__login'
            >
              Iniciar sesión
            </Link>

            <button
              onClick={ () => setIsNavbar(true) }
              className='header__menu'
            >
              <RiMenu3Fill />
            </button>
          </div>  {/* END HEADER MENUS */}
        </div>  {/* END RIGHT */}
      </div>
    </header>
  )
}
