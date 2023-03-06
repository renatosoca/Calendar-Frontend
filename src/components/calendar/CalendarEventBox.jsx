
export const CalendarEventBox = ({ event }) => {
  
  const { title} = event;

  return (
    <div>
      <strong>{ title }</strong>
    </div>
  )
}
