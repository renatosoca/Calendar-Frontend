import { useSelector } from 'react-redux';

export const ToastNotification = () => {
  const { msgEvent, typeMsg } = useSelector(state => state.calendar);
  
  return (
    <div className={`toast ${ !!msgEvent ? 'toast__active' : 'toast__desactive'}`}>
      { !!msgEvent && (
        <div className={`toast__box toast__box--${typeMsg}`}>
          <p>{ msgEvent }</p>
        </div>
      ) }
    </div>
  )
}
