import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const QualificationsSt = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 100%;
  li {
    display: flex;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    max-width: 800px;
    color: ${colors.primaryColor};
    background-color: ${colors.tertiaryColor};
    padding: 1rem;
    border-radius: 8px;
    border: 3px solid ${colors.secondaryColor};
    margin-top: 10px;
  }
  .short-name {
    min-width: 235px;
  }
  .average-name {
    min-width: 285px;
  }
  .large-name {
    min-width: 350px;
  }
  a:hover {
    color: ${colors.tertiaryColor};
    background-color: ${colors.primaryColor};
    transition: all 200ms ease-in-out;
  }
`;
