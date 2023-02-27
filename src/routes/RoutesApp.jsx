import { Route, Routes } from 'react-router-dom';
import { AuthRoutes, CalendarRoutes, PublicRoutes } from './';

export const RoutesApp = () => {

  const isLogged = 'not-authenticated'; // 'not-authenticated'

  return (
    <Routes>

      { isLogged === 'authenticated' ?
        <> 
          <Route path="/calendar/*" element={ <CalendarRoutes /> } />
          <Route path="/*" element={ <PublicRoutes /> } />
        </> :
        <>
          <Route path="/auth/*" element={ <AuthRoutes /> } />
          <Route path="/*" element={ <PublicRoutes /> } />
        </>
      }

    </Routes>
  )
}
