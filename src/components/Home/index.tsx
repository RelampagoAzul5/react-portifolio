import React from 'react';
import { Main, Section } from './styled';
import { HomeComponents } from './HomeComponents';

export function Home() {
  return (
    <Main>
      <h1>Informações Gerais</h1>
      <Section>
        <h1>Giovanni Henrique de Paula Fernandes</h1>
        <HomeComponents />
      </Section>
    </Main>
  );
}
