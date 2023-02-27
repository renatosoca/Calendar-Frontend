import { Route, Routes, Navigate } from 'react-router-dom';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <div>Pagina Publica</div> } />

      <Route path="*" element={ <Navigate to='/' /> } />
    </Routes>
  )
}
