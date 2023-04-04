import { Route, Routes, Navigate } from 'react-router-dom';
import { LoadingPage } from '../components';
import { useAuth } from '../hooks';

import { CalendarPage, PasswordUserProfile, ProfileUserPage } from '../pages';

export const CalendarRoutes = () => {
  const { status } = useAuth();

  if ( status === 'init' ) return <LoadingPage />

  return (
    <Routes>
      <Route path="/" element={ <CalendarPage /> } />

      <Route path="/profile" element={ <ProfileUserPage /> } />
      <Route path="/reset-password" element={ <PasswordUserProfile /> } />

      <Route path="/*" element={ <Navigate to='/calendar' /> } />
    </Routes>
  )
}
