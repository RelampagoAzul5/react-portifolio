import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

// Qualifications styled.js
export const QualificationsSt = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0;
  margin: 3rem 0;
  list-style: none;
  width: 100%;

  li {
    display: flex;
    width: 100%;
    max-width: 400px;
  }

  a {
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.primaryColor};
    background-color: ${colors.tertiaryColor};
    padding: 1.5rem 2rem;
    border-radius: 8px;
    border: 2px solid ${colors.secondaryColor};
    width: 100%;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      color: ${colors.tertiaryColor};
      background-color: ${colors.secondaryColor};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .short-name {
    min-width: 200px;
  }

  .average-name {
    min-width: 250px;
  }

  .large-name {
    min-width: 300px;
  }
`;
