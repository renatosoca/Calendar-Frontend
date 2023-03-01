import { CgMenuBoxed } from 'react-icons/cg';
import { useCalendarStore, useUiStore } from '../../hooks';

export const DeleteEventButton = ({ active }) => {
  const { isOpenModal } = useUiStore();

  const handleAddEvent = () => {
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
