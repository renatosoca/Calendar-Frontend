import { Link } from 'react-router-dom'

export const HeaderUserProfile = () => {
  return (
    <header className='profile__header'>
      <Link
        to="/calendar"
        className='profile__link'
      >
        Volver al calendario
      </Link>

      <div>
        <h1>Calendario</h1>
      </div>
    </header>
  )
}
