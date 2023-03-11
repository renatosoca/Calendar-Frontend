import { BiLogIn } from 'react-icons/bi'

export const ConfirmAccount = () => {
  return (
    <div className='confirm__container'>
      <div className='confirm__header'>
        <h1 className='confirm__title'>
          Cuenta Confirmada
        </h1>
      </div>

      <div className='confirm__body'>
        <p className='confirm__content'>
          Nos complace informarle que su cuenta ha sido confirmada con éxito. Ahora puede acceder a todos los servicios y funcionalidades disponibles en nuestra plataforma. Gracias por confiar en nosotros y no dude en contactarnos si tiene alguna pregunta o necesita ayuda adicional.
        </p>
      </div>

      <div className='confirm__footer'>
        <a href="/auth/login" className='confirm__btn'>
          <BiLogIn className='confirm__icon' />
          Iniciar Sesión
        </a>
      </div>
    </div>
  )
}
