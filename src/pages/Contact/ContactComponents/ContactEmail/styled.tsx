import styled from 'styled-components';
import * as colors from '../../../../configs/colors';

export const ContactEmailSt = styled.div`
  color: ${colors.primaryColor};
  background-color: ${colors.tertiaryColor};
  width: 87%;
  margin: 10px auto 0 auto;
  padding: 5px;
  border-radius: 8px;
  border: 3px solid ${colors.secondaryColor};
  h3 {
    width: 100%;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 16px;
  }
  p {
    width: 100%;
    font-size: 3rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    p {
      font-size: 2rem;
    }
  }
`;
