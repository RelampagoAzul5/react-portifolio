import React from 'react';
import { MediasInfo, ContactInfoLink } from '../../styled';

import IgIcon from '../../icons/IgIcon';
import GhIcon from '../../icons/GhIcon';
import LdIcon from '../../icons/LdIcon';

export default function ProfessionalMedias() {
  return (
    <MediasInfo>
      <h3>Redes Profissionais</h3>
      <ContactInfoLink href="https://github.com/RelampagoAzul5" target="_blank">
        <GhIcon />
        RelampagoAzul5
      </ContactInfoLink>
      <ContactInfoLink
        href="https://www.linkedin.com/in/giovanni-henrique-de-paula-fernandes-a7512b199/"
        target="_blank"
      >
        <LdIcon />
        Giovanni Henrique
      </ContactInfoLink>
      <ContactInfoLink
        href="https://www.instagram.com/tech_relampago/"
        target="_blank"
      >
        <IgIcon />
        @tech_relampago
      </ContactInfoLink>
    </MediasInfo>
  );
}
