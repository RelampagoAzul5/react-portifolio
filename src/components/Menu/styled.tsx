import styled, { css } from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../configs/colors';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  z-index: 1000;

  .menu {
    background-color: ${primaryColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 320px;
    height: 100vh;
    max-height: -webkit-fill-available;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1000;
    box-sizing: border-box;
    overflow: hidden;

    @media (min-width: 1025px) {
      transform: translateX(0);
    }

    &.visible {
      transform: translateX(0);
    }
  }

  .menu.visible {
    transform: translateX(0);
  }

  a {
    text-decoration: none;
    color: ${tertiaryColor};
    transition: all 0.2s ease;
  }

  div.links {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1.2rem;
    padding: 0 2rem;
  }

  a.item {
    font-size: 2.2rem;
    padding: 1.5rem 2rem;
    border-radius: 10px;
    font-weight: 500;
    display: flex;
    align-items: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  .selected {
    background-color: ${secondaryColor};
    color: white;
    font-weight: 600;

    &:hover {
      background-color: ${secondaryColor};
      opacity: 0.9;
    }
  }

  .menu-footer {
    margin-top: auto;
    font-size: 1.4rem;
    text-align: center;
    padding: 1.5rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
  }

  .my-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 3rem 2rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
  }

  .my-icon img {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${secondaryColor};
    background-color: ${tertiaryColor};
  }

  .my-icon .menu-infos {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .my-icon .menu-infos p.name {
    color: ${tertiaryColor};
    font-size: 2.4rem;
    font-weight: 600;
    margin: 0;
  }

  .my-icon .menu-infos p.role {
    color: ${secondaryColor};
    font-size: 2rem;
    opacity: 0.9;
  }

  .toggle-menu {
    font-size: 2.8rem;
    color: ${tertiaryColor};
    background-color: ${primaryColor};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 2rem;
    left: 2rem;
    border: none;
    position: fixed;
    z-index: 101;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;

    &:hover {
      background-color: ${secondaryColor};
      transform: scale(1.05);
    }

    @media (min-width: 1025px) {
      display: none;
    }
  }

  .menu-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 0.5rem 0;
  }

  .menu-icons svg {
    width: 36px;
    height: 36px;
    transition: transform 0.2s ease;
    color: ${tertiaryColor};
  }

  .icon {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip {
    font-size: 1.3rem;
    visibility: hidden;
    opacity: 0;
    width: max-content;
    background-color: ${primaryColor};
    color: white;
    font-weight: 500;
    text-align: center;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease;
    z-index: 1;
    white-space: nowrap;
  }

  .icon:hover {
    svg {
      transform: scale(1.15);
      color: ${secondaryColor};
    }

    .tooltip {
      visibility: visible;
      opacity: 1;
      top: 110%;
    }
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: none;

    &.visible {
      display: block;
      @supports (height: 100dvh) {
        height: 100dvh;
      }
    }
  }
`;

export const MenuGlobalStyles = css`
  :root {
    --menu-width: 320px;
  }

  @media (max-width: 1024px) {
    body {
      padding-left: 0;
    }
  }

  @media (min-width: 1025px) {
    body {
      padding-left: var(--menu-width);
    }
  }

  html,
  body {
    height: 100%;
    overflow-x: hidden;
  }
`;
