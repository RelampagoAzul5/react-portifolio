import styled from 'styled-components';
import * as colors from '../../configs/colors';

export const Main = styled.main`
  margin: 0 auto;
  width: 92%;
  max-width: 1400px;
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    color: ${colors.primaryColor};
    font-size: 4rem;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;

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
