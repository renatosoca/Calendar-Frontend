import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      <Route path="/*" element={ <PublicRoutes /> } />

      //Ruta Privada
      <Route path="/calendar/*" element={ <CalendarRoutes /> } />
    </Routes>
  )
}
