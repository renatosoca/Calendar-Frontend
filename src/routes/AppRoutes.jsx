import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthRoutes, CalendarRoutes, PublicRoutes } from './';
import { startChecking } from '../store';
import { useAuth } from '../hooks';
import { LoadingPage } from '../components';

export const AppRoutes = () => {

  const { status, dispatch } = useAuth();

  useEffect(() => {
    dispatch( startChecking() );
  }, [])

  if ( status === 'init' ) return <LoadingPage />
  
  return (
    <Routes>
      <Route path="/*" element={ <PublicRoutes /> } />
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      <Route path="/calendar/*" element={ <CalendarRoutes /> } />
    </Routes>
  )
}
