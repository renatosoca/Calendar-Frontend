import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <p>Copyright ©{new Date().getFullYear()} <span className='footer__copyright'>Calendario.</span> Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
