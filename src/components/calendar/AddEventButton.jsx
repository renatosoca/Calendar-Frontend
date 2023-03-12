import { addHours } from 'date-fns';
import { CgMenuBoxed } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { startCloseModalEvent, startEventActiveModal, startOpenModal } from '../../store';

export const AddEventButton = () => {
  const dispatch = useDispatch();

  const handleAddEvent = () => {
    dispatch( startEventActiveModal({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours( new Date(), 1 ),
      user: {
        _id: '',
        name: ''
      }
    }));

    dispatch( startOpenModal() );
    dispatch( startCloseModalEvent() );
  }

  return (
    <button
      onClick={ handleAddEvent }
      className="btn btn__add"
    >
      <CgMenuBoxed className='btn__icon' />
      <span>Evento nuevo</span>
    </button>
  )
}
