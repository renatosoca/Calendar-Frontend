import { useDispatch } from 'react-redux';

import { startClearMessages } from '../../store';
import { MdOutlineCheckCircleOutline, MdClose } from 'react-icons/md';

export const SuccessMessageAPI = ({ messageSuccess }) => {
  const dispatch = useDispatch();

  const handleClearError = () => {
    dispatch( startClearMessages() );
  }

  return (
    <div className='form__message form__message-success'>
      <MdOutlineCheckCircleOutline className='form__icon form__icon-success' />

      <div className="form__message-content">
        <p className="form__message-text">{ messageSuccess }</p>
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
