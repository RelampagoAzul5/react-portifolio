import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const TechnologiesSt = styled.ul`
  margin: 3rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  list-style: none;
  padding: 0;

  li {
    background: ${colors.tertiaryColor};
    text-align: center;
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
  }

  img {
    width: 100%;
    max-width: 180px;
    height: auto;
  }
`;
