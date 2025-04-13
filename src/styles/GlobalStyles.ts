import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../configs/colors';
export default createGlobalStyle`* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}
body {
  background-color: ${colors.tertiaryColor};
  font-family:  sans-serif;
}
.invisible {
  display: none;
}

`;
export const Container = styled.section`
  display: flex;
`;
