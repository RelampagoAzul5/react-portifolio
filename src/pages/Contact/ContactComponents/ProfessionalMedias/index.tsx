// ProfessionalMedias.tsx
import React from 'react';
import { ContactItem } from '../../styled';
import GithubAppIcon from '../../../../icons/MediaIcons/GithubIcon';
import LinkedinIcon from '../../../../icons/MediaIcons/LinkedInIcon';
import InstagramAppIcon from '../../../../icons/MediaIcons/InstagramAppIcon';

export default function ProfessionalMedias() {
  return (
    <>
      <ContactItem href="https://github.com/RelampagoAzul5" target="_blank">
        <GithubAppIcon />
        <span>RelampagoAzul5</span>
      </ContactItem>
      <ContactItem
        href="https://www.linkedin.com/in/giovanni-henrique-de-paula-fernandes-a7512b199/"
        target="_blank"
      >
        <LinkedinIcon />
        <span>Giovanni Henrique</span>
      </ContactItem>
      <ContactItem
        href="https://www.instagram.com/tech_relampago/"
        target="_blank"
      >
        <InstagramAppIcon />
        <span>@tech_relampago</span>
      </ContactItem>
    </>
  );
}
