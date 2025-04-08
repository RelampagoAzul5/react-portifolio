import React, { useEffect, useState } from 'react';
import { Nav } from './styled';

const maxMenuWidth = 1025;

export function Menu() {
  const [selected, setSelected] = useState<
    'general-information' | 'portifolio' | 'contact'
  >('general-information');
  const [isVisible, setIsVisible] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);

  const handleSelect = (
    section: 'general-information' | 'portifolio' | 'contact',
  ): void => {
    setSelected(section);
  };

  const handleToggleMenu = (): void => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const shouldHide = window.innerWidth < maxMenuWidth;
      setIsVisible(!shouldHide);
      setShowToggleButton(shouldHide);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Nav>
      {showToggleButton && (
        <button className="toggle-menu" onClick={handleToggleMenu}>
          {isVisible ? 'X' : '☰'}
        </button>
      )}
      <section className={`menu ${isVisible ? 'visible' : ''}`}>
        <div className="my-icon">
          <img src="./src/img/my_icon.jpg" alt="Uma pequena foto de perfil" />
          <div className="menu-infos">
            <p className="name">Giovanni Henrique</p>
            <a
              href="https://github.com/RelampagoAzul5"
              target="_blank"
              rel="noreferrer"
            >
              relampagoazul5
            </a>
          </div>
        </div>
        <div className="menu-icons">
          <a
            href="https://www.instagram.com/tech_relampago/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./src/img/icons/Instagram_icon.png"
              alt="icone do instagram"
              className="Instagram logo"
            />
          </a>
          <a
            href="https://github.com/RelampagoAzul5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./src/img/icons/github_icon.png"
              alt="icone do instagram"
              className="Github logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/giovanni-henrique-de-paula-fernandes-a7512b199/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./src/img/icons/linkedin_icon.png"
              alt="icone do instagram"
              className="Linkedin logo"
            />
          </a>
        </div>
        <div className="links">
          <a
            href="#general-information"
            className={`item ${selected === 'general-information' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('general-information')}
          >
            Informações Gerais
          </a>
          <a
            href="#portifolio"
            className={`item ${selected === 'portifolio' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('portifolio')}
          >
            Portifólio
          </a>
          <a
            href="#contact"
            className={`item ${selected === 'contact' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('contact')}
          >
            Contato
          </a>
        </div>

        <div className="menu-footer">
          Created by{' '}
          <a
            href="https://github.com/RelampagoAzul5"
            target="_blank"
            rel="noreferrer"
          >
            relampagoazul5
          </a>{' '}
          &copy;
        </div>
      </section>
    </Nav>
  );
}
