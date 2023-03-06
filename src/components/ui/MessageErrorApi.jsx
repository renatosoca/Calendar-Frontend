import { useDispatch } from 'react-redux';

import { startClearMessageError } from '../../store';
import { MdOutlineError, MdClose } from 'react-icons/md';

export const MessageErrorApi = ({ messageError }) => {
  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch( startClearMessageError() );
  }

  return (
    <div className='form__message'>
      <div className="form__message-content">
        <MdOutlineError className='form__icon form__icon-error' />

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
