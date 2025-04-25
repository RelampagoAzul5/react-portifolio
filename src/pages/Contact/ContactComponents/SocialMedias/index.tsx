import React from 'react';
import { MediasInfo, ContactInfoLink } from '../../styled';
import WpIcon from '../../icons/WpIcon';
import IgIcon from '../../icons/IgIcon';

export default function SocialMedias() {
  return (
    <MediasInfo>
      <h3>Redes Sociais</h3>
      <ContactInfoLink href="https://wa.me/5524992083391" target="_blank">
        <WpIcon />
        +55 24 99208-3391
      </ContactInfoLink>
      <ContactInfoLink
        href="https://www.instagram.com/giohenrique_514/"
        target="_blank"
      >
        <IgIcon />
        @giohenrique_514
      </ContactInfoLink>
    </MediasInfo>
  );
}
