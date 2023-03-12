export const CalendarEventBox = ({ event }) => {
  
  const { title} = event;
  
  return (
    <div className="eventBox">
      <strong>{ title }</strong>
    </div>
  )
}
