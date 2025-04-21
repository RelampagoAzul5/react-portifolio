import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const TechnologiesSt = styled.ul`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  max-width: 800px;
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
    border: 3px solid ${colors.secondaryColor};
  }

  img {
    width: 16rem;
    max-width: 100%;
  }
`;
