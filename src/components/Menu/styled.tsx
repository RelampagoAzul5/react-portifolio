// styled.ts
import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../configs/colors';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  .menu {
    overflow: hidden;
    background-color: ${primaryColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 32rem;
    min-height: 90vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }

  .menu.visible {
    transform: translateX(0);
  }

  a {
    text-decoration: none;
    color: ${tertiaryColor};
  }

  div.links {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    border-top: 1px solid ${tertiaryColor};
  }

  a.item {
    font-size: 2.9rem;
    width: 93%;
    margin: 0 auto;
    padding: 0 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .selected {
    transition: all 200ms ease-in-out;
    background-color: ${secondaryColor};
    border-radius: 4px;
  }

  .menu-footer {
    margin-top: auto;
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid ${tertiaryColor};
    color: ${tertiaryColor};

    a {
      color: ${secondaryColor};
      text-decoration: none;
    }
  }

  .my-icon {
    border-bottom: 1px solid ${tertiaryColor};
    display: flex;
  }

  .my-icon img {
    max-height: 14rem;
    border-radius: 360px;
  }

  .my-icon .menu-infos {
    margin-top: 3rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    word-break: break-word;
    white-space: normal; /* permite quebrar a linha */
    overflow-wrap: break-word;
  }

  .my-icon .menu-infos p {
    color: ${tertiaryColor};
    font-size: 2rem;
    margin-top: 1rem;
  }

  .my-icon .menu-infos a {
    margin-left: 0.5rem;
    margin-top: 1rem;
    color: ${tertiaryColor};
    font-size: 1.6rem;
  }

  .toggle-menu {
    font-size: 3rem;
    color: ${secondaryColor};
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    position: fixed;
    z-index: 101;
    cursor: pointer;
  }
  .menu-icons {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .menu-icons .logo {
    margin-top: 1rem;
    width: 6rem;
    border-radius: 40px;
  }
  .menu-icons .Instagram {
    width: 4rem;
    border-radius: 10px;
  }
`;
