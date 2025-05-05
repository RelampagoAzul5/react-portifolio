import React from 'react';
import { Main } from './styled';
import Carousel from './components/Carousel';

export function Portifolio() {
  return (
    <Main>
      <h1>Meu Portfólio</h1>
      <Carousel role="FrontEnd" />
    </Main>
  );
}
