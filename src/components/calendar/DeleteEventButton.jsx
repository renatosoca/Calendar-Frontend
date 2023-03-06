import { useDispatch } from 'react-redux';

import { AiTwotoneDelete } from 'react-icons/ai';
import { startDeletingEvent } from '../../store';

export const DeleteEventButton = ({ active }) => {
  const dispatch = useDispatch();

  const handleAddEvent = () => {
    dispatch( startDeletingEvent() );
  }

  return (
    <button
      onClick={ handleAddEvent }
      className={`btn__delete ${ active  ? 'btn__delete-active' : '' }`}
    >
      <AiTwotoneDelete className='btn__icon' />
      <span>Borrar Evento</span>
    </button>
  )
}
