import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { AuthRoutes, CalendarRoutes, PublicRoutes } from './';
import { startChecking } from '../store';

export const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startChecking() );
  }, [])
  
  
  return (
    <Routes>
      <Route path="/*" element={ <PublicRoutes /> } />
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      //Ruta Privada
      <Route path="/calendar/*" element={ <CalendarRoutes /> } />
    </Routes>
  )
}
