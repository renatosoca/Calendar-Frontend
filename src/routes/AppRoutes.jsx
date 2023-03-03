import { Route, Routes } from 'react-router-dom';

import { AuthRoutes, CalendarRoutes, PublicRoutes } from '.';

export const AppRoutes = () => {

  const isLogged = 'checking'; // 'not-authenticated' 'authenticated'
  
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
