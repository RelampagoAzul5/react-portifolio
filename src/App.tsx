import React, { useEffect, useState } from 'react';
import { isRouteErrorResponse, Outlet, useRouteError } from 'react-router-dom';

import { Menu } from './components/Menu';
import { Container } from './styles/GlobalStyles';
import { MenuSpacing } from './components/MenuSpacing';
import { Error } from './components/Error';
function App() {
  const maxMenuSpacingExistsWidht = 1025;
  const [menuSpacingExists, setMenuSpacingExists] = useState(true);
  const error = useRouteError();

  useEffect(() => {
    const handleResize = () => {
      const shouldHide = window.innerWidth < maxMenuSpacingExistsWidht;
      setMenuSpacingExists(!shouldHide);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Menu />
      <Container>
        {menuSpacingExists ? <MenuSpacing /> : ''}
        {isRouteErrorResponse(error) ? <Error /> : <Outlet />}
      </Container>
    </>
  );
}

export default App;
