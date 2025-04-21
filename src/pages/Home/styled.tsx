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
  section {
    margin-top: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 2rem;
    color: ${colors.primaryColor};
    background-color: ${colors.tertiaryColor};
    padding: 1rem;
    border-radius: 8px;
    border: 3px solid ${colors.secondaryColor};
  }
`;
