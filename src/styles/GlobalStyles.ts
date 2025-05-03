import { createGlobalStyle } from 'styled-components';
import * as colors from '../configs/colors';
export default createGlobalStyle`
:root {
    --menu-width: 320px;
  }

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
html{
  font-size: 62.5%;
}
body {
  background-color: ${colors.mainBgColor};
  font-family:  sans-serif;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding-left: 0;
  }
  @media (min-width: 1025px) {
      padding-left: var(--menu-width);
    }
  }

.invisible {
  display: none;
}

`;
