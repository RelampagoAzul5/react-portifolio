// styled.ts
import styled from 'styled-components';
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from '../../configs/colors';

export const Header = styled.header`
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
    background-color: #f7f7f7;
  }

  .my-icon .menu-infos {
    margin-top: 3rem;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    word-break: break-word;
    white-space: normal;
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
    color: ${secondaryColor};
    font-size: 1.6rem;
    font-weight: bold;
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
    background-color: ${tertiaryColor};
    margin: 0 auto;
    width: 30rem;
    margin-top: 1rem;
    border-radius: 40px;
    padding: 0.2rem;
  }
  .menu-icons .logo {
    width: 6rem;
    border-radius: 40px;
    padding: 0.1rem;
  }
  .menu-icons .Instagram {
    padding: 0.4rem;
    width: 5rem;
    border-radius: 10px;
  }
  .icon {
    position: relative;
    display: inline-block;
  }
  .tooltip {
    font-size: 13px;
    visibility: hidden;
    opacity: 0;
    width: max-content;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 6px 12px;
    border-radius: 8px;
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.3s;
    z-index: 1;
  }

  .instagram-tp {
    background-color: rgba(76, 124, 164, 0.8);
    bottom: -45%;
  }

  .github-tp {
    background-color: rgba(0, 0, 0, 0.8);
    bottom: -35%;
  }

  .linkedin-tp {
    background-color: rgba(76, 124, 164, 0.8);
    bottom: -35%;
  }

  .Instagram:hover {
    background-color: rgba(76, 124, 164, 0.2);
  }
  .Github:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .Linkedin:hover {
    background-color: rgba(76, 124, 164, 0.2);
  }
  .icon:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }
`;
