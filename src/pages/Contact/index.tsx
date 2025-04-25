import React from 'react';
import { Section, Main, ContactInfo } from './styled';
import SocialMedias from './ContactComponents/SocialMedias';
import ProfessionalMedias from './ContactComponents/ProfessionalMedias';
import ContactEmail from './ContactComponents/ContactEmail';

export function Contact() {
  return (
    <Main>
      <h1>Contato</h1>
      <Section>
        <h2>Informações pra contato</h2>
        <ContactInfo>
          <SocialMedias />
          <ProfessionalMedias />
        </ContactInfo>
        <ContactEmail />
      </Section>
    </Main>
  );
}
