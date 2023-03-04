import { CgMenuBoxed } from 'react-icons/cg';
import { useDispatch } from 'react-redux';

import {  useUiStore } from '../../hooks';
import { startDeletingEvent } from '../../store';

export const DeleteEventButton = ({ active }) => {
  const dispatch = useDispatch();
  const { isOpenModal } = useUiStore();

  const handleAddEvent = () => {
    dispatch( startDeletingEvent() );
  }

  return (
    <button
      onClick={ handleAddEvent }
      className={`btn__delete ${ active || !isOpenModal ? 'btn__delete-active' : '' }`}
    >
      <CgMenuBoxed className='btn__icon' />
      <span>Borrar Evento</span>
    </button>
  )
}
