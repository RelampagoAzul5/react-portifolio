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
    color: ${colors.emphasisTextColor};
  }
  h2 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }
  section {
    margin-top: 10px;
  }
`;
export const Qualifications = styled.ul`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  ax-width: 800px;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-left: auto;
  margin-right: auto;

  li {
    background: ${colors.tertiaryColor};
    text-align: center;
    padding: 10px 7px 8px 7px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 16rem;
    max-width: 100%;
  }
`;
