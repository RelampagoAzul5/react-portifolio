import React from 'react';
import { isRouteErrorResponse, Outlet, useRouteError } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Error } from './pages/Error';
function App() {
  const error = useRouteError();

  return (
    <>
      <Menu />
      <div>{isRouteErrorResponse(error) ? <Error /> : <Outlet />}</div>
    </>
  );
}

export default App;
