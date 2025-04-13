import React, { useEffect, useRef, useState } from 'react';
import { Header } from './styled';
import { Link } from 'react-router-dom';

const maxMenuWidth = 1025;

export function Menu() {
  const [selected, setSelected] = useState<
    'general-information' | 'portifolio' | 'contact'
  >('general-information');
  const [isVisible, setIsVisible] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(target);
      const clickedOutsideButton =
        toggleButtonRef.current && !toggleButtonRef.current.contains(target);

      if (
        showToggleButton &&
        isVisible &&
        clickedOutsideMenu &&
        clickedOutsideButton
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, showToggleButton]);
  return (
    <Header>
      {showToggleButton && (
        <button
          ref={toggleButtonRef}
          className="toggle-menu"
          onClick={handleToggleMenu}
        >
          {isVisible ? 'X' : '☰'}
        </button>
      )}
      <nav ref={menuRef} className={`menu ${isVisible ? 'visible' : ''}`}>
        <div className="my-icon">
          <img
            src="./assets/img/my_icon.jpg"
            alt="Uma pequena foto de perfil"
          />
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
          <div className="icon">
            <a
              href="https://www.instagram.com/tech_relampago/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/img/icons/Instagram_icon.png"
                alt="icone do instagram"
                className="Instagram logo"
              />
            </a>
            <span className="tooltip instagram-tp">Instagram</span>
          </div>
          <div className="icon">
            <a
              href="https://github.com/RelampagoAzul5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/img/icons/github_icon.png"
                alt="icone do github"
                className="Github logo"
              />
            </a>
            <span className="tooltip github-tp">Github</span>
          </div>
          <div className="icon">
            <a
              href="https://www.linkedin.com/in/giovanni-henrique-de-paula-fernandes-a7512b199/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./assets/img/icons/linkedin_icon.png"
                alt="icone do linkedin"
                className="Linkedin logo"
              />
            </a>
            <span className="tooltip linkedin-tp">LinkedIn</span>
          </div>
        </div>
        <div className="links">
          <Link
            to="/"
            className={`item ${selected === 'general-information' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('general-information')}
          >
            Informações Gerais
          </Link>
          <Link
            to="/portifolio"
            className={`item ${selected === 'portifolio' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('portifolio')}
          >
            Portifólio
          </Link>
          <Link
            to="/contact"
            className={`item ${selected === 'contact' ? 'selected' : ''}`}
            onMouseEnter={() => handleSelect('contact')}
          >
            Contato
          </Link>
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
      </nav>
    </Header>
  );
}
