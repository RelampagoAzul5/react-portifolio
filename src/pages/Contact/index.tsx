import React from 'react';
import { Main, Section, ContactGrid, ContactCard } from './styled';
import SocialMedias from './ContactComponents/SocialMedias';
import ProfessionalMedias from './ContactComponents/ProfessionalMedias';
import ContactEmail from './ContactComponents/ContactEmail';

export function Contact() {
  return (
    <Main>
      <h1>Contato</h1>
      <Section>
        <h2>Giovanni Henrique de Paula Fernandes</h2>

        <ContactGrid>
          <ContactCard>
            <h3>Redes Sociais</h3>
            <SocialMedias />
          </ContactCard>

          <ContactCard>
            <h3>Redes Profissionais</h3>
            <ProfessionalMedias />
          </ContactCard>

          <ContactCard>
            <ContactEmail />
          </ContactCard>
        </ContactGrid>
      </Section>
    </Main>
  );
}
