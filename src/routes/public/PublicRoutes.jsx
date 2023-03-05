import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../../pages';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />

      <Route path="*" element={ <Navigate to='/' /> } />
    </Routes>
  )
}
