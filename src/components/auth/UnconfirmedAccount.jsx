
export const UnconfirmedAccount = ({ MessageError }) => {
  return (
    <div className='confirm__container'>
      <div className='confirm__header'>
        <h1 className='confirm__title'>
          Error al confirmar su cuenta
        </h1>
      </div>

      <div className='confirm__body'>
        <p className='confirm__content-error'>
          { MessageError }
        </p>
      </div>

      <div className='confirm__footer'>
        <p className='confirm__btn-error'>
          Si no ha sido confirmada, por favor, vuelva a intentarlo.
        </p>
      </div>
    </div>
  )
}
