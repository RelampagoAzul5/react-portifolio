import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Main = styled.main`
  margin: 0 auto;
  width: 150rem;
  min-height: 90vh;
  height: 100%;
  h1 {
    margin: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 40px;
    color: ${colors.primaryColor};
  }
`;
export const Section = styled.section`
  margin-top: 10px;
  background-color: ${colors.primaryColor};
  color: ${colors.tertiaryColor};
  border-radius: 8px;
  max-width: 100vw;
  min-width: 60vw;
  width: 95%;
  margin: 0 auto;
  min-height: 200px;
  padding: 10px;
  h1 {
    font-size: 3rem;
    margin-top: 10px;
    color: ${colors.secondaryColor};
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
`;
export const ContactInfoLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 230px;
  background-color: ${colors.tertiaryColor};
  padding: 1rem;
  border-radius: 8px;
  border: 3px solid ${colors.secondaryColor};
  font-size: 1.9rem;
  color: ${colors.primaryColor};
  transition: all 0.3s;

  margin-top: 10px;
  &:hover {
    background-color: ${colors.primaryColor};
    color: ${colors.tertiaryColor};
  }
  @media (max-width: 768px) {
  }
`;

export const MediasInfo = styled.div`
  margin-top: 10px;
  width: 40%;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${colors.tertiaryColor};
  border-radius: 8px;
  h3 {
    width: 100%;
    color: ${colors.primaryColor};
    font-size: 3rem;
    align-self: flex-start;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const ContactInfo = styled.section`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
