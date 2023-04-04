import { useSelector } from 'react-redux';

import { AiTwotoneDelete } from 'react-icons/ai';
import { startDeletingEvent } from '../../store';
import { useUi } from '../../hooks';

export const DeleteEventButton = () => {
  const { isLoading } = useSelector(state => state.calendar);
  const { btnDelete, dispatch } = useUi();

  const handleDeleteEvent = () => {
    dispatch( startDeletingEvent() );
  }

  return (
    <button 
      onClick={handleDeleteEvent} 
      className={ `${ btnDelete ? 'btn btn__delete' : 'hidden' }` }
      disabled={isLoading === 'loadingDelete'}
    >
      <AiTwotoneDelete className='btn__icon' />
      {isLoading === 'loadingDelete' ?
        <span>Eliminando...</span> :
        <span>Eliminar Evento</span>
      }
    </button>
  )
}
