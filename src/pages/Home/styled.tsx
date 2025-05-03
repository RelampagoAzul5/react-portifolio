import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Main = styled.main`
  margin: 0 auto;
  max-width: 120rem;
  width: 90%;
  min-height: 90vh;
  padding: 2rem 0;

  h1 {
    margin: 2rem 0;
    text-align: center;
    font-size: 3.2rem;
    color: ${colors.primaryColor};
    font-weight: 600;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: ${colors.secondaryColor};
      margin: 1rem auto 0;
      border-radius: 2px;
    }
  }
`;

export const Section = styled.section`
  margin: 2rem auto;
  background-color: ${colors.tertiaryColor};
  color: ${colors.primaryColor};
  border-radius: 12px;
  width: 100%;
  padding: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 2.8rem;
    margin: 0 0 2rem 0;
    color: ${colors.secondaryColor};
    text-align: left;

    &::after {
      width: 60px;
      margin: 1rem 0;
    }
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
  }

  section {
    margin-top: 2rem;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.8rem;
    line-height: 1.6;
    color: ${colors.primaryColor};
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    border: none;
  }
`;
