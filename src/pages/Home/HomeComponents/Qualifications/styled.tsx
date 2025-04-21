import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const QualificationsSt = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  margin-top: 10px;
  li {
    display: flex;
  }

  a {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 2rem;
    color: ${colors.primaryColor};
    background-color: ${colors.tertiaryColor};
    padding: 1rem;
    border-radius: 8px;
    border: 3px solid ${colors.secondaryColor};
    white-space: nowrap;
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
