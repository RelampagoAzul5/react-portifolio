import React, { useEffect, useRef, useState } from 'react';
import { Header } from './styled';
import { Link } from 'react-router-dom';
import LinkedinIcon from '../../icons/MediaIcons/LinkedInIcon';
import InstagramAppIcon from '../../icons/MediaIcons/InstagramAppIcon';
import GithubAppIcon from '../../icons/MediaIcons/GithubIcon';

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

  const handleClick = () => {
    if (showToggleButton) setIsVisible(false);
  };

  const handleToggleMenu = (): void => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const shouldShowToggle = window.innerWidth <= 1024;
      setIsVisible(!shouldShowToggle);
      setShowToggleButton(shouldShowToggle);
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
    <>
      <Header>
        {showToggleButton && (
          <button
            ref={toggleButtonRef}
            className="toggle-menu"
            onClick={handleToggleMenu}
          >
            {isVisible ? '✕' : '☰'}
          </button>
        )}
        <nav ref={menuRef} className={`menu ${isVisible ? 'visible' : ''}`}>
          <div className="my-icon">
            <img
              src="./assets/img/my_icon.jpg"
              alt="Foto de perfil de Giovanni Henrique"
            />
            <div className="menu-infos">
              <p className="name">Giovanni Henrique</p>
              <p className="role">Desenvolvedor Web</p>
            </div>
          </div>

          <div className="menu-icons">
            <div className="icon">
              <a
                href="https://github.com/RelampagoAzul5"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubAppIcon />
                <span className="tooltip">GitHub</span>
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.instagram.com/tech_relampago/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramAppIcon />
                <span className="tooltip">Instagram</span>
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/giovanni-henrique-de-paula-fernandes-a7512b199/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
                <span className="tooltip">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="links">
            <Link
              to="/"
              className={`item ${selected === 'general-information' ? 'selected' : ''}`}
              onMouseEnter={() => handleSelect('general-information')}
              onClick={handleClick}
            >
              Informações Gerais
            </Link>
            <Link
              to="/portifolio"
              className={`item ${selected === 'portifolio' ? 'selected' : ''}`}
              onMouseEnter={() => handleSelect('portifolio')}
              onClick={handleClick}
            >
              Portfólio
            </Link>
            <Link
              to="/contact"
              className={`item ${selected === 'contact' ? 'selected' : ''}`}
              onMouseEnter={() => handleSelect('contact')}
              onClick={handleClick}
            >
              Contato
            </Link>
          </div>

          <div className="menu-footer">Created by Giovanni Henrique &copy;</div>
        </nav>
      </Header>
      {isVisible && showToggleButton && (
        <div className="menu-overlay" onClick={() => setIsVisible(false)} />
      )}
    </>
  );
}
