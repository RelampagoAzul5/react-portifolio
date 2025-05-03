// SocialMedias.tsx
import React from 'react';
import WhatsAppIcon from '../../../../icons/MediaIcons/WhatsAppIcon';
import InstagramAppIcon from '../../../../icons/MediaIcons/InstagramAppIcon';
import { ContactItem } from '../../styled';

export default function SocialMedias() {
  return (
    <>
      <ContactItem href="https://wa.me/5524992083391" target="_blank">
        <WhatsAppIcon />
        <span>+55 24 99208-3391</span>
      </ContactItem>
      <ContactItem
        href="https://www.instagram.com/giohenrique_514/"
        target="_blank"
      >
        <InstagramAppIcon />
        <span>@giohenrique_514</span>
      </ContactItem>
    </>
  );
}
