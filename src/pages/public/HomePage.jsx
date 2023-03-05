import { Link } from 'react-router-dom';
import { PublicLayout } from '../../layouts';

export const HomePage = () => {
  return (
    <PublicLayout>
      <Link
        to="/auth/login"
        className='btn'
      >
        Login
      </Link>
    </PublicLayout>
  )
}