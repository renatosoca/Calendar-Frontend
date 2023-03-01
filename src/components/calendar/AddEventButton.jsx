import { addHours } from 'date-fns';
import { CgMenuBoxed } from 'react-icons/cg';
import { useCalendarStore, useUiStore } from '../../hooks';

export const AddEventButton = () => {
  const { activeEventModal } = useCalendarStore();
  const { openModal } = useUiStore();

  const handleAddEvent = () => {
    activeEventModal({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours( new Date(), 8 ),
      user: {
        _id: '2',
        name: 'Renato'
      }
    });

    openModal();
  }

  return (
    <button
    onClick={ handleAddEvent }
      className="btn__add"
    >
      <CgMenuBoxed className='btn__icon' />
      <span>Evento nuevo</span>
    </button>
  )
}
