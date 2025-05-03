import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Main = styled.main`
  margin: 0 auto;
  width: 92%;
  max-width: 2000px;
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${colors.primaryColor};
    font-size: 4rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    width: 100%;

    &::after {
      content: '';
      display: block;
      width: 120px;
      height: 6px;
      background: ${colors.secondaryColor};
      margin: 1.5rem auto 0;
    }
  }
`;

export const Section = styled.section`
  background: ${colors.tertiaryColor};
  border-radius: 16px;
  padding: 3.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  margin-top: 3rem;
  width: 100%;
  box-sizing: border-box;

  h2 {
    color: ${colors.primaryColor};
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 1.5rem;
    border-bottom: 3px solid ${colors.secondaryColor};
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  justify-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0;
  }
`;

export const ContactCard = styled.div`
  background: ${colors.tertiaryColor};
  border-radius: 12px;
  padding: 2.5rem;
  border: 3px solid ${colors.secondaryColor};
  transition: all 0.3s ease;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: ${colors.primaryColor};
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    width: 100%;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: ${colors.secondaryColor};
      margin: 1rem auto 0;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 100%;
    width: 100%;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  width: 100%;

  p {
    margin: 0;
    color: ${colors.primaryColor};
    font-size: 2rem;
    width: 100%;
    word-break: break-word;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.8rem;
    }
  }
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: ${colors.tertiaryColor};
  border-radius: 8px;
  text-decoration: none;
  color: ${colors.primaryColor};
  font-size: 2.2rem;
  transition: all 0.3s ease;
  border: 2px solid ${colors.secondaryColor};
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;

  &:hover {
    background: ${colors.secondaryColor};
    color: ${colors.tertiaryColor};
    transform: scale(1.02);

    svg {
      fill: ${colors.tertiaryColor};
      transform: scale(1.1);
    }
  }

  svg {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1.2rem;
    max-width: 100%;
    width: 100%;

    svg {
      width: 36px;
      height: 36px;
    }
  }
`;

export const EmailContent = styled.div`
  text-align: center;
  color: ${colors.primaryColor};
  font-size: 2.5rem;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem auto 0;
  border: 3px solid ${colors.primaryColor};
  transition: all 0.3s ease;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 0;
    color: ${colors.primaryColor};
    font-size: 2.8rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 1.5rem;
    width: 100%;

    p {
      font-size: 2.2rem;
    }
  }
`;
