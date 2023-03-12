import { useDispatch, useSelector } from 'react-redux';

import { AiTwotoneDelete } from 'react-icons/ai';
import { startCloseModalEvent, startDeletingEvent } from '../../store';

export const DeleteEventButton = () => {
  const dispatch = useDispatch();
  const { ModalEvent } = useSelector( state=> state.ui );


  const handleAddEvent = () => {
    dispatch( startDeletingEvent() );
    setTimeout(() => {
      dispatch( startCloseModalEvent() );
    }, 500);
  }

  return (
    <button 
      onClick={handleAddEvent} 
      className={ `${ ModalEvent ? 'btn btn__delete' : 'hidden' }` }
    >
      <AiTwotoneDelete className='btn__icon' />
      Eliminar Evento
    </button>
  )
}
