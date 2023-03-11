import { useDispatch } from 'react-redux';

import { startClearMessages } from '../../store';
import { MdOutlineError, MdClose } from 'react-icons/md';

export const ErrorMessageAPI = ({ messageError }) => {
  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch( startClearMessages() );
  }

  return (
    <div className='form__message'>
      <MdOutlineError className='form__icon form__icon-error' />

      <div className="form__message-content">
        <p className="form__message-text">{ messageError }</p>
      </div>

      <button
        type='button'
        className='form__message-btn'
        onClick={ handleClearError }
      >
        <MdClose className='form__icon' />
      </button>
    </div>
  )
}
